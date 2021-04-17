import { useState } from 'react';
import backgroundVideo from './assets/nvidia rtx 3080 - reveal trailer - ign.mp4';
import './LoginPage.scss';
import * as yup from 'yup';
import { createHeaders, handleApiResult } from '../../../core/utils/api';
import AppError from '../../../core/error/AppError';
import ErrorAlert from '../../App/Shared/ErrorAlert';
import ApiError from '../../../core/error/ApiError';



// validatie van een form

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});





const LoginPage = ({ setUser }) => {

    
    
    const [data, setData] = useState({
        email: '',
        password:'',
    });

    const [error, setError] = useState();

    const handleChange = (e) => {
        setData( {
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();

        schema.validate(data).then(() => {
            

            fetch(`${process.env.REACT_APP_BASE_API}/login`,{
                method: 'POST',
                headers:  createHeaders(),
                body: JSON.stringify(data),
            }).then(handleApiResult).then((data) => { 
                /*succesfull */ 
                setUser(data);
            })
            .catch((e) => { /*fail */ /* alert('Unauthorized'); */
                if (e instanceof ApiError) {
                    if (e.isUnauthorized()) {
                        setError(new AppError('Wrong combination'));
                    } else {
                        setError(e);
                    }
                } else {
                    setError(new AppError(e));
                }
            });
    })
            .catch((e) => {
            
            console.log(e.errors);
            setError(new AppError(e));
            
        })
    };

    return (
       
        <>
        <div className="overlay">
        <video autoPlay loop muted className="video">


     <source src={backgroundVideo}type='video/mp4' />
    </video>
    
        <div className="col-md-12 ">
            
            <div className="row justify-content-center">
                <div className="col-l-3 col-md-offset-4">
            <div className="account-box">
                
                <div className="logo" >
                    <img src="#" alt=""/>
                </div>
                <form className="form-signin" action="#" onSubmit={handleSubmit} >

                <p className="title_page">Library Computer Hardware</p>
                    <p className="title_login">Sign in or Sign up</p>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" name="email"  value={data.email} onChange={handleChange}  />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" name="password"  value={data.password} onChange={handleChange}/>
                </div>
                <button  className="btn btn-lg btn-block purple-bg" type="submit">
                    Sign in</button>
                </form>

                <ErrorAlert error={error} />
                
                <div className="or-box row-block">
                    <div className="row">
                        <div className="col-md-12 row-block">
                            <a href="/" className="btn btn-primary btn-block"> Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
   
    
    </>
           
        
    )

};


export default LoginPage;