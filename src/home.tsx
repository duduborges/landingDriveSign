/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./components/ui/carousel"
import { Navbar } from "flowbite-react";
import logo from "../Drive_sign_logo_semfundo.png"
import { useEffect, useState } from "react";
import objetivo from "../img/plataforma.png"
import a from "../img/kit1.png"
import b from "../img/kit2.png"
import planoBarato from "../img/plano.png"
import planoCaro from "../img/planoPremium.png"
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";




export default function Home() {

    const [activeLink, setActiveLink] = useState('home');

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setActiveLink(e.currentTarget.name);
    }

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY || document.documentElement.scrollTop;

        sections.forEach((section) => {
            if (
                section.offsetTop <= scrollPos &&
                section.offsetTop + section.offsetHeight > scrollPos
            ) {
                const id = section.getAttribute('id');
                if (id) {
                    setActiveLink(id);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (<>
        <header className="w-[100vw] pb-44">
            <Navbar fluid rounded className="z-10 fixed w-full bg-secondaryBg font-mono">
                <Navbar.Brand >
                    <img src={logo} className="mr-8 ml-4  w-20" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-4xl font-bold lexend-tera text-primaryBg"> DriveSign</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link className={`text-[16px]  ${activeLink === 'home' ? 'text-secondaryColor' : 'text-gray-500'} `} name="home"
                        onClick={handleClick} href="#" >
                        Home
                    </Navbar.Link>
                    <Navbar.Link className={`text-[16px] ${activeLink === 'about' ? 'text-secondaryColor' : 'text-gray-500'}`} name="about"
                        onClick={handleClick} href="#about">
                        Sobre nós
                    </Navbar.Link>
                    <Navbar.Link className={`text-[16px] ${activeLink === 'plans' ? 'text-secondaryColor' : 'text-gray-500'}`} name="plans"
                        onClick={handleClick} href="#plans">Nossos planos</Navbar.Link>
                    <Navbar.Link className={`text-[16px] ${activeLink === 'product' ? 'text-secondaryColor' : 'text-gray-500'}`} name="product"
                        onClick={handleClick} href="#product">Nossos produtos</Navbar.Link>
                    <Navbar.Link className={`text-[16px] ${activeLink === 'contato' ? 'text-secondaryColor' : 'text-gray-500'}`} name="contato"
                        onClick={handleClick} href="#contato">Contate-nos</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </header >
        <main className="w-full z-1">

            <section id="about">
                <div className="w-10/12 m-auto flex justify-evenly">
                    <div className="w-5/6">
                        <h1 className="text-center text-3xl font-semibold font-mono ">Quem somos?</h1>
                        <p className="text-xl text-justify font-serifl tracking-tighter w-3/4 m-auto">
                            O DriveSing é uma startup brasileira referência em trânsito inclusivo, dedicada a transformar a mobilidade urbana para pessoas com deficiência auditiva. Nosso compromisso é garantir que todos os motoristas tenham acesso às ferramentas necessárias para uma condução segura e autônoma, independentemente de suas limitações auditivas.
                            <br /><br />
                            Nossa equipe é composta por especialistas em tecnologia, designers de experiência do usuário e profissionais de trânsito, todos unidos por um propósito comum: criar soluções inovadoras que promovam a inclusão e a segurança no trânsito. Com base em pesquisas aprofundadas e feedback constante dos usuários, desenvolvemos um aplicativo que converte sinais sonoros de trânsito em alertas visuais, proporcionando uma experiência de direção mais segura e eficiente.
                            <br /> <br />
                            No DriveSing, acreditamos que a tecnologia pode e deve ser um facilitador da igualdade. Por isso, estamos sempre em busca de novas maneiras de melhorar a acessibilidade e a comunicação no trânsito, visando uma sociedade onde todos possam se deslocar com confiança e segurança. Junte-se a nós nessa jornada e experimente a diferença que a mobilidade inclusiva pode fazer.
                        </p>
                    </div>
                    <div>
                        <img src={logo} className=" w-full rounded-md h-[25rem]" alt="Foto da equipe" />
                    </div>
                </div>
            </section>

            <section >

                <div className="w-10/12 m-auto my-11 flex justify-evenly">
                    <div className="flex items-center">
                        <img src={objetivo} className="w-[25em] h-[25rem] rounded-md  " alt="Foto da equipe" />
                    </div>
                    <div className="w-4/6">
                        <h1 className="text-center text-3xl font-semibold font-mono ">Plataforma DriveSign</h1>
                        <p className="text-xl font-serifl  tracking-tighter w-10/12 m-auto">
                            Garanta segurança e autonomia no trânsito,
                            transformando sons em imagens. Experimente a
                            mobilidade inclusiva e dirija com confiança.
                            Nosso aplicativo converte sinais sonoros de trânsito,
                            como sirenes, buzinas e alarmes, em alertas visuais
                            claros e instantâneos, garantindo que motoristas com
                            deficiência auditiva possam dirigir com segurança
                        </p>
                        <br />
                        <p className="text-md font-bold font-serifl  tracking-tighter w-10/12 m-auto">
                            Nosso aplicativo converte sinais sonoros de trânsito,
                            como sirenes, buzinas e alarmes, em alertas visuais
                            claros e instantâneos, garantindo que motoristas com
                            deficiência auditiva possam dirigir com segurança
                        </p>
                        <div className="w-3/4 m-auto flex flex-col justify-start items-center mt-4">
                            <button className="bg-yellow-300 p-4 rounded-xl text-xl my-2 text-black" onClick={() => alert("Em breve...")}>Baixar o app</button>
                            <button className="bg-yellow-300 p-4 rounded-xl text-xl my-2 text-black" onClick={() => alert("Em breve...")}>Planos a partir de R$24,90</button>
                            <button className="bg-yellow-300 p-4 rounded-xl text-xl my-2 text-black" onClick={() => alert("Em breve...")}>Faça um teste gratuito por 7 dias</button>
                        </div>
                    </div>

                </div>
            </section>

            <section className="w-10/12 m-auto my-11 flex flex-col ">
                <div>
                    <h2 className="text-center text-3xl font-semibold font-mono">Nosso propósito</h2>
                    <p className="w-3/4 m-auto">Nosso propósito é transformar a mobilidade urbana, tornando-a acessível e segura para todos.
                        Queremos criar um ambiente onde cada motorista possa dirigir com confiança, independente de suas limitações.</p>
                </div>
                <div className="flex w-[91%] justify-between mt-8 align-top m-auto">
                    <div className="w-1/3 mx-auto flex flex-col gap-4 align-top">
                        <div className="align-top">
                            <h2 className="text-3xl font-bold font-mono">Missão</h2>
                            <p>Nossa missão é desenvolver e implementar tecnologias inovadoras que promovam a inclusão e a segurança no trânsito,
                                garantindo que motoristas com deficiência auditiva possam se deslocar com autonomia e segurança.</p>
                        </div>
                        <div className="">
                            <h2 className="text-3xl font-bold font-mono">Visão</h2>
                            <p>Ser referência global em soluções de trânsito inclusivo, revolucionando a forma como pessoas com deficiência auditiva
                                interagem com o ambiente urbano, criando um mundo onde a mobilidade seja um direito acessível a todos, sem exceções.</p>
                        </div>
                    </div>
                    <div className="w-1/3 m-auto flex flex-col items-start  ">
                        <h2 className="text-3xl text-center font-bold font-mono">Valores</h2>
                        <div className="mb-4 mt-2">
                            <p className="font-bold underline text-[19px]">Inclusão</p>
                            <p>Igualdade de oportunidades para todos.</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold underline text-[19px]">Inovação</p>
                            <p>Busca constante por novas tecnologias.</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold underline text-[19px]">Segurança</p>
                            <p>Prioridade à segurança dos usuários.</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold underline text-[19px]">Compromisso</p>
                            <p>Excelência e satisfação do cliente.</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold underline text-[19px]">Responsabilidade Social</p>
                            <p>Ética e contribuição para uma sociedade justa.</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold underline text-[19px]">Colaboração</p>
                            <p>Trabalho em equipe e parcerias eficazes.</p>
                        </div>
                    </div>
                </div>

            </section>

            <section id="plans" className="pt-10 pb-10">
                <div className="text-center text-5xl lexend-tera py-10">
                    <h2>Nossos planos</h2>
                </div>
                <div className="flex justify-evenly w-10/12 m-auto">
                    <div className="flex flex-col cursor-pointer w-1/3 m-auto justify-center align-middle items-center">
                        <div className="w-96 py-5 minhaimg"><img className="shadoww h-1/5" src={planoBarato} alt="" /></div>
                        <div className="text-center lexend-tera w-full "><p className="text-2xl">Plano BASIC</p><p className="text-xl text-green-300">R$ 24,90/Mes</p>
                            <p className="text-sm text-left mt-2">Benefícios: <p>Detectar sensores, ligações diretamente do aplicativo, gravações do trajeto</p> </p>
                        </div>
                    </div>
                    <div className="flex flex-col cursor-pointer w-1/3 m-auto justify-center align-middle items-center">
                        <div className="w-96 py-7 minhaimg"><img className="shadoww h-1/5" src={planoCaro} alt="" /></div>
                        <div className="  lexend-tera w-full text-center "><p className="text-2xl">Plano PREMIUM</p><p className="text-xl text-green-300">R$ 39,90/Mes</p>
                            <p className="text-sm text-left mt-2">Beneficios: <p>Detectar sensores, ligações diretamente do aplicativo, gravações do trajeto, manual em libras, guia de manutenção</p></p>
                        </div>
                    </div>
                </div>
            </section>


            <section id="product">
                <Carousel className="pb-32 pt-10  w-10/12 m-auto">
                    <div className="text-center text-5xl lexend-tera py-10">
                        <h2>Nossos produtos</h2>
                    </div>
                    <CarouselContent>
                        <CarouselItem className="basis-1/3">
                            <div className="flex flex-col cursor-pointer justify-center align-middle items-center">
                                <div className="w-96 py-7 minhaimg"><img className="shadoww" src={a} alt="" /></div>
                                <div className="text-center lexend-tera w-max"><p className="text-2xl">Kit de Sensores</p><p className="text-xl text-green-300">R$ 600,00</p></div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <div className="flex flex-col cursor-pointer justify-center align-middle items-center">
                                <div className="w-96 py-7 minhaimg"><img className="shadoww" src={b} alt="" /></div>
                                <div className="text-center lexend-tera w-full"><p className="text-2xl">Kit de Sensores + Painel Multimídia</p><p className="text-xl text-green-300">R$ 1200,00</p></div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <div className="flex flex-col cursor-pointer justify-center align-middle items-center">
                                <div className="w-96 py-7 minhaimg"><img className="shadoww" src={a} alt="" /> <p className="text-red-600 font-bold">Serviço incluso</p></div>
                                <div className="text-center lexend-tera w-full"><p className="text-2xl">Kit de Sensores + Instalação por profissional</p><p className="text-xl text-green-300">R$ 750,00</p></div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <div className="flex flex-col cursor-pointer justify-center align-middle items-center">
                                <div className="w-96 py-7 minhaimg"><img className="shadoww" src={b} alt="" /><p className="text-red-600 font-bold">Serviço incluso</p></div>
                                <div className="text-center lexend-tera w-full"><p className="text-2xl">Kit de Sensores + Painel Multimídia + Instalação por profissional</p><p className="text-xl text-green-300">R$ 1500,00</p></div>
                            </div>
                        </CarouselItem>


                    </CarouselContent>
                    <CarouselPrevious></CarouselPrevious>
                    <CarouselNext></CarouselNext>
                </Carousel>
            </section>
        </main>
        <footer id="contato" className="bg-white text-black">
            <section className="pt-5">
                <h1 className="text-3xl text-center my-5 lexend-tera">Entre em contato conosco</h1>
                <div className="">
                    <form className="form-contact flex justify-evenly" action="https://formsubmit.co/eduardo_cambraia@estudante.sesisenai.org.br" method="POST">
                        <div id="inputs-div">
                            <div>
                                <input type="text" name="nome" className="h-12 rounded-[5px]  p-4 m-4 w-96 text-gray-700" id="w3lName" placeholder="Digite seu Nome:"
                                    required />
                            </div>
                            <div>
                                <input type="email" className="h-12 rounded-[5px] p-4 m-4 w-96 text-gray-700" name="Email" id="w3lSender" placeholder="Digite seu Email:"
                                    required /></div>
                            <div>
                                <input type="hidden" name="_captcha" value="false" />

                                <textarea className="p-4 m-4 h-48 w-96 resize-none text-gray-700 rounded-[5px]" name="Mensagem" id="w3lMessage"
                                    placeholder="Escreva aqui sua mensagem" required></textarea>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 ">
                            <div className="flex flex-col">
                                <div className="flex flex-row align-middle justify-center mb-2 items-center gap-4">
                                    <div>
                                        <SiGmail size={50} className="text-secondaryColor" />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p id="info-contact"> Envie-nos um email manualmente:</p>
                                    </div>
                                    <p className="text-center" >duduborges333969@gmail.com</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex  flex-col">
                                    <div className="flex flex-row align-middle justify-center mb-2 items-center gap-4">
                                        <div>
                                            <BsWhatsapp size={50} className="text-secondaryColor" />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div>
                                            <p id="info-contact"> Ou contate-nos pelo WhatsApp:</p>
                                        </div>
                                        <p >(51) 985836686 </p>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-secondaryColor p-5 rounded-[8px]" >Enviar mensagem</button>
                        </div>

                    </form>
                </div>
            </section>

            <div className="bg-white w-full text-black text-3xl flex flex-col align-middle lexend-tera justify-center items-center py-10">
                <div>
                    <p>DriveSign &copy;</p>
                </div>
                <div className="flex gap-3 justify-center items-center pt-4 text-sm">
                    <p>Siga-nos nas Redes sociais:</p>
                    <FaInstagram size={50} className="text-primaryBg" />
                    <FaYoutube size={50} className="text-primaryBg" />
                </div>

            </div>
        </footer>

    </>)
}