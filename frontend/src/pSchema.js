import * as Yup from 'yup';

export const pSchema = Yup.object({
    name: Yup.string().required(),
    price: Yup.number().required().positive(),
    image: Yup.string().url().required(),
    category: Yup.string().url().nullable(),
});