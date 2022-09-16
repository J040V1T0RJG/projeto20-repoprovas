const validateSchema = (schema: any, body: any) => {
    const { error } = schema.validate(body, { abortEarly: false });

    if (error) {
        throw { type: "wrong_schema", message: "Dados invalidos" }
    };
};

export {
    validateSchema
};