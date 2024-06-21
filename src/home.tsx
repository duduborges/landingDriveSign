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
import sobre from "../sobrenos.jpeg"
import objetivo from "../objetivo.jpeg"
import a from "../img/kit1.png"
import b from "../img/kit2.png"
// import c from "../img/kit-sem-nada.png"
// import d from "../img/kit-sem-nada-c-servico.png"
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
                <div className="w-9/12 m-auto flex justify-evenly">
                    <div className="w-8/12">
                        <h1 className="text-center text-3xl font-semibold font-mono ">Quem somos?</h1>
                        <p className="text-xl text-justify font-serifl tracking-tighter w-3/4 m-auto">
                            Nós somos uma equipe apaixonada por tornar o trânsito mais acessível para todos.
                            Nosso projeto visa melhorar a segurança e a inclusão de pessoas com deficiência auditiva.
                            Desenvolvemos um aplicativo inovador que se integra com sensores e dispositivos Arduino para
                            ajudar os usuários a identificar a origem dos sons no trânsito. Acreditamos que a tecnologia pode ser
                            uma aliada poderosa na busca por um mundo mais inclusivo e seguro para todos.
                        </p>
                    </div>
                    <div>
                        <img src={sobre} className="bg-white w-[25em] rounded-md h-[25rem]" alt="Foto da equipe" />
                    </div>
                </div>
            </section>

            <section >

                <div className="w-9/12 m-auto my-11 flex justify-evenly">
                    <div>
                        <img src={objetivo} className="w-[25em] h-[25rem] rounded-md bg-white" alt="Foto da equipe" />
                    </div>
                    <div className="w-8/12">
                        <h1 className="text-center text-3xl font-semibold font-mono ">Nosso objetivo</h1>
                        <p className="text-xl font-serifl text-justify tracking-tighter w-3/4 m-auto">
                            Estamos comprometidos em aprimorar constantemente nosso aplicativo e expandir sua funcionalidade. Além de identificar a origem
                            dos sons no trânsito, estamos explorando maneiras de fornecer informações em tempo real sobre semáforos, obstáculos e condições
                            de tráfego. Queremos que nosso aplicativo seja uma ferramenta completa para a comunidade, capacitando todos a se movimentarem
                            com segurança e confiança. Se você compartilha de nossa paixão pela acessibilidade e segurança no trânsito, junte-se a nós!
                            Estamos sempre abertos a novas ideias, colaborações e parcerias. Entre em contato conosco e faça parte dessa missão.
                        </p>
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
                        <div className="text-center lexend-tera w-full "><p className="text-2xl">Plano BASIC</p><p className="text-xl text-green-300">R$ 39,90/Mes</p>
                            <p className="text-sm text-left mt-2">Benefícios: <p>Detectar sensores, ligações diretamente do aplicativo, gravações do trajeto</p> </p>
                        </div>
                    </div>
                    <div className="flex flex-col cursor-pointer w-1/3 m-auto justify-center align-middle items-center">
                        <div className="w-96 py-7 minhaimg"><img className="shadoww h-1/5" src={planoCaro} alt="" /></div>
                        <div className="  lexend-tera w-full text-center "><p className="text-2xl">Plano PREMIUM</p><p className="text-xl text-green-300">R$ 59,90/Mes</p>
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