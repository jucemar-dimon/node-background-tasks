import Mail from "../lib/Mail";

export default {
  key: "RegistrationMail",
  options: {
    delay: 5000,
    priority: 3,

    lifo: true,
  },
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "Node Background Tasks <node@node.com>",
      to: `${user.name} < ${user.email} >`,
      subject: "Cadastro de usuários",
      html: `Olá, ${user.name}, bem-vindo`,
    });
  },
};
