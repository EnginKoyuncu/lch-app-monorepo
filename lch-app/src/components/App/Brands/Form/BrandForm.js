import { useCallback, useEffect, useState } from 'react';
import Button from '../../../Design/Button';
import Input from '../../../Design/Input';
import * as yup from 'yup';
import { getValidationErrors } from '../../../../core/utils/validation';

const schema = yup.object().shape({
    brand: yup.string().required(),
    description: yup.string().required(),
    country: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    website: yup.string(),


});


const defaultData = {
    brand:'',
    description:'',
    country:'',
    firstName:'',
    lastName:'',
    email:'',
    website:'',
}

const BrandForm = ({onSubmit, initialData = {}, disabled}) => {

    const [isTouched, setIsTouched] = useState(false);

    const [data, setData] = useState({...defaultData,...initialData});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        

        setData ({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const validate = useCallback((data, onSuccess) => {
        schema.validate(data, { abortEarly: false}).then(() => { if (onSuccess) {
            onSuccess(data);
        }
            
        }).catch((err) => {
            setErrors(getValidationErrors(err));
        })
    }, []);

    useEffect(() => {
        if (isTouched) 
        {
        validate(data);
    }
    }, [validate, isTouched, data]);




    const handleSubmit = (e) => {
        
        
        e.preventDefault();
        setIsTouched(true);
        validate(data, () => {
            onSubmit(data);
        })

    };

    return (
        <form onSubmit={handleSubmit} noValidate={true}>
            <label htmlFor="brand">Brand</label>
            <Input type = "text" name="brand"
                value={data.brand || ''}
                disabled={disabled}
                onChange={handleChange}
                error={errors.brand}
            />
             <label htmlFor="description">Description</label>
            <Input type = "text" name="description"
                value={data.description || ''}
                disabled={disabled}
                onChange={handleChange}
                error={errors.description}
            />
             <label htmlFor="country">Country</label>
            <Input type = "text" name="country"
                value={data.country || ''}
                disabled={disabled}
                onChange={handleChange}
                error={errors.country}
            />
             <label htmlFor="firstName">Firstname</label>
            <Input type = "text" name="firstName"
                value={data.firstName || ''}
                disabled={disabled}
                onChange={handleChange}
                error={errors.firstName}
            />
            <label htmlFor="lastName">Lastname</label>
            <Input type = "text" name="lastName"
                value={data.lastName || ''}
                disabled={disabled}
                onChange={handleChange}
                error={errors.lastName}
            />
            <label htmlFor="email">Email</label>
            <Input type = "text" name="email"
                value={data.email || ''}
                disabled={disabled}
                onChange={handleChange}
                error={errors.email}
            />
            <label htmlFor="website">Website</label>
            <Input type = "text" name="website"
                value={data.website || ''}
                disabled={disabled}
                onChange={handleChange}
                error={errors.website}
            />
            <Button type="submit" disabled={disabled}> {data._id ? 'Update' : 'Create'}
                
            </Button>

        </form> 
    )

};

export default BrandForm;