import passwordGenerator from "password-generator";
import Mail from "../lib/Mail";

export default {
  async store(req, res) {
    const { name, email } = req.body;

    const user = {
      name,
      email,
      password: passwordGenerator(15, false),
    };

    await Mail.sendMail({
      from: "Node Background Tasks <node@node.com>",
      to: `${name} < ${email} >`,
      subject: "Cadastro de usuários",
      html: `Olá, ${name}, bem-vindo`,
    });

    return res.json(user);
  },
};
