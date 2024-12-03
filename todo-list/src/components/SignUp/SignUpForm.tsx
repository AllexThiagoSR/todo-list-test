import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";

export default function SignUpForm() {
  const [formValues, setFormValues] = useState({ username: '', password: '', passwordConfirmation: '' });
  const [passwordsDiff, setPasswordsDiff] = useState(false);

  const onChangeValue = ({ value, keyName}: { value: string, keyName: keyof typeof formValues }) => {
    setFormValues({ ...formValues, [keyName]: value });
  }

  const onFocusChange = (isFocused: boolean) => {
    if (formValues.password !== formValues.passwordConfirmation && formValues.passwordConfirmation.length > 0) {
      setPasswordsDiff(true)
    } else setPasswordsDiff(false)
  }

  const onClickButton = () => {
    if (passwordsDiff) return
    if (!formValues.password || !formValues.passwordConfirmation || !formValues.username) return
  } 

  return (
    <form className="flex items-center justify-center flex-col min-w-[400px] px-10 py-32 border border-black rounded-xl gap-6">
      <Input
        className="w-full"
        value={formValues.username}
        onValueChange={(usernameFromInput) => onChangeValue({ value: usernameFromInput, keyName: 'username' })}
        classNames={{
          inputWrapper: [
            "border-default-400 hover:border-default-500"
          ]
        }}
        label="Nome de Usuário"
        type="text"
        name="username"
        variant="underlined"
      />
      <Input
        value={formValues.password}
        onValueChange={(passwordFromInput) => onChangeValue({ value: passwordFromInput, keyName: 'password' })}
        className="w-full" 
        classNames={{
          inputWrapper: [
            "border-default-400 hover:border-default-500"
          ]
        }}
        label="Senha" 
        type="password" 
        name="password" 
        variant="underlined"
      />
      <Input
        value={formValues.passwordConfirmation}
        onValueChange={(passwordConfirmationFromInput) => onChangeValue({ value: passwordConfirmationFromInput, keyName: 'passwordConfirmation' })}
        className="w-full" 
        classNames={{
          inputWrapper: [
            "border-default-400 hover:border-default-500"
          ]
        }}
        label="Confirmar Senha" 
        type="password" 
        name="passwordConfirmation" 
        variant="underlined"
        isInvalid={passwordsDiff}
        errorMessage={'As senhas não coincidem'}
        onFocusChange={onFocusChange}
      />
      <Button onClick={onClickButton} className="w-[70%] border-default-400 hover:border-default-500" variant="bordered" color="default">Registre-se</Button>
      <Link href="/">Já tem conta? Faça o Login</Link>
    </form>
  )
}