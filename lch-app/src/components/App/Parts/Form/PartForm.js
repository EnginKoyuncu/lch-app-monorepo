import Button from '../../../Design/Button';
import Input from '../../../Design/Input';
import * as yup from 'yup';
import BrandSelect from '../../Brands/Select/BrandSelect';
import useForm from '../../../../core/hooks/useForm';

const schema = yup.object().shape({
    serie: yup.string().required(),
    model: yup.string().required(),
    year: yup.string().required(),
    description_product: yup.string().required(),
});


const defaultData = {
    serie:'',
    model:'',
    year:'',
    description_product:'',

}

const PartForm = ({ onSubmit, initialData = {}, disabled }) => {
    const initial = {
        ...defaultData,
        ...initialData,
    };
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(schema, initial);

    const handleData = (values) => {
        onSubmit(values);
    };

    return (
        <form onSubmit={handleData} noValidate={true}>
             <label htmlFor="serie">Serie</label>
            <Input type = "text" name="serie"
                value={values.serie || ''}
                disabled={disabled}
                onChange={handleChange}
                error={errors.serie}
            />
             <label htmlFor="model">Model</label>
            <Input type = "text" name="model"
                value={values.model || ''}
                disabled={disabled}
                onChange={handleChange}
                error={errors.model}
            />
             <label htmlFor="year">Year</label>
            <Input type = "text" name="year"
                value={values.year || ''}
                disabled={disabled}
                onChange={handleChange}
                error={errors.year}
            />
            <label htmlFor="description_product">Description Product</label>
            <Input type = "text" name="description_product"
                value={values.description_product || ''}
                disabled={disabled}
                onChange={handleChange}
                error={errors.description_product}
            />

        <BrandSelect 
                name="brandId"
                value={values.brandId}
                disabled={disabled}
                onChange={handleChange}
                error={errors.brandId}
            />

            <Button type="submit" disabled={disabled}> {values._id ? 'Update' : 'Create'}

            

            
                
            </Button>

        </form> 
    )

};

export default PartForm;