import {
  CanActivate,
  ExecutionContext,
  Injectable,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

const SCHEMA_VALIDATOR_KEY = 'schemaValidator';

type ValidatorSources = 'body' | 'query' | 'params' | 'headers';

export const SchemaValidator = (
  schema: any,
  validatorSources: ValidatorSources[] = ['body']
) => SetMetadata(SCHEMA_VALIDATOR_KEY, { schema, validatorSources });

@Injectable()
export class SchemaValidatorGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const schemaValidatorProps = this.reflector.get(
      SCHEMA_VALIDATOR_KEY,
      context.getHandler()
    );

    if (!schemaValidatorProps) {
      return true;
    }

    const { schema: schemaToValidate, validatorSources } = schemaValidatorProps;

    const http = context.switchToHttp();
    const req = http.getRequest();
    const res = http.getResponse();

    try {
      let payload = {};

      validatorSources.forEach((validatorSource) => {
        payload = { ...payload, ...req[validatorSource] };
      });

      schemaToValidate.parse(payload);
      return true;
    } catch (e) {
      res.status(400).json({ errors: e?.issues || [] });
      return false;
    }
  }
}
