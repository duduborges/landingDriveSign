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
import a from "../img/kit-c-multimidia-servico.png"
import b from "../img/kit-c-multimidia.png"
import c from "../img/kit-sem-nada.png"
import d from "../img/kit-sem-nada-c-servico.png"
import planoBarato from "../img/plano.png"
import planoCaro from "../img/planoPremium.png"
import { FaInstagram, FaYoutube } from "react-icons/fa";




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
                    <Navbar.Link className={`text-[16px] ${activeLink === 'products' ? 'text-secondaryColor' : 'text-gray-500'}`} name="products"
                        onClick={handleClick} href="#product">Nossos produtos</Navbar.Link>
                    <Navbar.Link className={`text-[16px] ${activeLink === 'contact' ? 'text-secondaryColor' : 'text-gray-500'}`} name="contact"
                        onClick={handleClick} href="#contact">Contate-nos</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </header >
        <main className="w-full z-1">

            <section id="about">
                <div className="w-9/12 m-auto flex justify-between">
                    <div className="w-8/12">
                        <h1 className="text-center text-3xl font-semibold font-mono ">Quem somos?</h1>
                        <p className="text-xl font-serifl">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quaerat velit facere odit, deserunt maxime nostrum laborum, ut illo blanditiis explicabo eligendi unde rerum aliquid labore dolore. Minus, temporibus reprehenderit. consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nisi sunt labore aliquam perferendis ullam atque nulla maxime illo praesentium molestias inventore quia amet ipsam nobis quos repudiandae perspiciatis deserunt? adipisicing elit. Aliquam vel, est magnam aliquid quibusdam eligendi. Dolorem maiores voluptatum illum enim! Repudiandae voluptate quisquam veniam voluptas dicta iusto dolore vero quo!</p>
                    </div>
                    <div>
                        <img src={sobre} className="bg-white w-[25em] rounded-md h-[25rem]" alt="Foto da equipe" />
                    </div>
                </div>
            </section>

            <section >

                <div className="w-9/12 m-auto my-11 flex justify-between">
                    <div>
                        <img src={objetivo} className="w-[25em] h-[25rem] rounded-md bg-white" alt="Foto da equipe" />
                    </div>
                    <div className="w-8/12">
                        <h1 className="text-center text-3xl font-semibold font-mono ">Nosso objetivo</h1>
                        <p className="text-xl font-serifl">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quaerat velit facere odit, deserunt maxime nostrum laborum, ut illo blanditiis explicabo eligendi unde rerum aliquid labore dolore. Minus, temporibus reprehenderit. consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nisi sunt labore aliquam perferendis ullam atque nulla maxime illo praesentium molestias inventore quia amet ipsam nobis quos repudiandae perspiciatis deserunt? adipisicing elit. Aliquam vel, est magnam aliquid quibusdam eligendi. Dolorem maiores voluptatum illum enim! Repudiandae voluptate quisquam veniam voluptas dicta iusto dolore vero quo!</p>
                    </div>

                </div>
            </section>

            <section id="plans" className="pt-20 pb-10">
                <div className="text-center text-5xl lexend-tera py-10">
                    <h2>Nossos planos</h2>
                </div>
                <div className="flex justify-evenly w-10/12 m-auto">
                    <div className="flex flex-col cursor-pointer w-1/3 m-auto justify-center align-middle items-center">
                        <div className="w-96 py-5 minhaimg"><img className="shadoww" src={planoBarato} alt="" /></div>
                        <div className="text-center lexend-tera w-full "><p className="text-2xl">Plano BASIC</p><p className="text-xl text-green-300">R$ 39,90/Mes</p>
                            <p className="text-sm text-left mt-2">Benefícios: <p>Detectar sensores, ligações diretamente do aplicativo, gravações do trajeto</p> </p>
                        </div>
                    </div>
                    <div className="flex flex-col cursor-pointer w-1/3 m-auto justify-center align-middle items-center">
                        <div className="w-96 py-7 minhaimg"><img className="shadoww" src={planoCaro} alt="" /></div>
                        <div className="  lexend-tera w-full text-center "><p className="text-2xl">Plano PREMIUM</p><p className="text-xl text-green-300">R$ 59,90/Mes</p>
                            <p className="text-sm text-left mt-2">Beneficios: <p>Detectar sensores, ligações diretamente do aplicativo, gravações do trajeto, manual em libras, guia de manutenção</p></p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="product">
                <Carousel className="pb-32 w-10/12 m-auto">
                    <div className="text-center text-5xl lexend-tera py-10">
                        <h2>Nossos produtos</h2>
                    </div>
                    <CarouselContent>
                        <CarouselItem className="basis-1/3">
                            <div className="flex flex-col cursor-pointer justify-center align-middle items-center">
                                <div className="w-96 py-7 minhaimg"><img className="shadoww" src={c} alt="" /></div>
                                <div className="text-center lexend-tera w-max"><p className="text-2xl">Kit Arduino + Sensor sônico</p><p className="text-xl text-green-300">R$ 600,00</p></div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <div className="flex flex-col cursor-pointer justify-center align-middle items-center">
                                <div className="w-96 py-7 minhaimg"><img className="shadoww" src={b} alt="" /></div>
                                <div className="text-center lexend-tera w-full"><p className="text-2xl">Kit Arduino + Sensor sônico + Painel Multimídia</p><p className="text-xl text-green-300">R$ 1200,00</p></div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <div className="flex flex-col cursor-pointer justify-center align-middle items-center">
                                <div className="w-96 py-7 minhaimg"><img className="shadoww" src={d} alt="" /></div>
                                <div className="text-center lexend-tera w-full"><p className="text-2xl">Kit Arduino + Sensor sônico + Instalação por profissional</p><p className="text-xl text-green-300">R$ 750,00</p></div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <div className="flex flex-col cursor-pointer justify-center align-middle items-center">
                                <div className="w-96 py-7 minhaimg"><img className="shadoww" src={a} alt="" /></div>
                                <div className="text-center lexend-tera w-full"><p className="text-2xl">Kit Arduino + Sensor sônico + Painel Multimídia + Instalação por profissional</p><p className="text-xl text-green-300">R$ 1500,00</p></div>
                            </div>
                        </CarouselItem>


                    </CarouselContent>
                    <CarouselPrevious></CarouselPrevious>
                    <CarouselNext></CarouselNext>
                </Carousel>
            </section>

            <section id="contact">

            </section>

        </main>
        <footer>
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