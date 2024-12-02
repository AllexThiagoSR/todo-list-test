import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";

export default function LoginForm() {
  const [{username, password}, setFormValues] = useState({ username: '', password: '' });
  return (
    <form className="flex items-center justify-center flex-col min-w-[400px] px-10 py-32 border border-black rounded-xl gap-6">
      <Input
        className="w-full"
        value={username}
        onValueChange={(usernameFromInput) => setFormValues({ username: usernameFromInput, password })}
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
        value={password}
        onValueChange={(passwordFromInput) => setFormValues({ username, password: passwordFromInput })}
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
      <Button className="w-[70%] border-default-400 hover:border-default-500" variant="bordered" color="default">Login</Button>
      <Link href="/sign-up">Não tem conta? Registre-se</Link>
    </form>
  )
}