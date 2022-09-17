import { wrongSchemaError } from "./errorUtils";

const validateSchema = (schema: any, body: any) => {
    const { error } = schema.validate(body, { abortEarly: false });

    if (error) {
        throw wrongSchemaError("Invalid data");
    };
};

export {
    validateSchema
};