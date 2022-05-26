import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {useHistory} from "react-router-dom"
import "./styles.css"

function Form () {

    const formSchema = yup.object().shape({
        user: yup.string().required("Usuário obrigatório"),
        email: yup.string().email("Email inválido").required("Email obrigatório"),
        senha: yup.string().min(6, "Pelo menos 6 caracteres").required("Senha obrigatória"),
    })

    const history = useHistory();
    const authenticated = localStorage.getItem("userEmail");

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(formSchema)});

    const onSubmitFunction = (data) => {
        localStorage.setItem("userEmail", data.user);
        history.push("/home")
    };

    if(authenticated){
        history.push("/home")
    }

    return(
        <div className='box-form'>
            <form className='form' onSubmit={handleSubmit(onSubmitFunction)} >
                <h3 className='title'>Login</h3>

                <input className='inputs' placeholder='Usuário' {...register("user")} />
                <p className='erro'>{errors.user?.message}</p>
                <input className='inputs' placeholder='Email' {...register("email")} />
                <p className='erro'>{errors.email?.message}</p>
                <input className='inputs' type='password' placeholder='Senha' {...register("senha")} />
                <p className='erro'>{errors.senha?.message}</p>
                <button className='btnLogin' type='submit'>Entrar</button>
            </form>
        </div>
    )
};

export default Form;