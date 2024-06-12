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
import { useState } from "react";


export default function Home() {

    const [activeLink, setActiveLink] = useState('home');

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setActiveLink(e.currentTarget.name);
    }

    return (<>
        <header className="w-[100vw] pb-36">
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
                        onClick={handleClick} href="#">
                        Sobre nós
                    </Navbar.Link>
                    <Navbar.Link className={`text-[16px] ${activeLink === 'plans' ? 'text-secondaryColor' : 'text-gray-500'}`} name="plans"
                        onClick={handleClick} href="#">Nossos planos</Navbar.Link>
                    <Navbar.Link className={`text-[16px] ${activeLink === 'products' ? 'text-secondaryColor' : 'text-gray-500'}`} name="products"
                        onClick={handleClick} href="#">Nossos produtos</Navbar.Link>
                    <Navbar.Link className={`text-[16px] ${activeLink === 'contact' ? 'text-secondaryColor' : 'text-gray-500'}`} name="contact"
                        onClick={handleClick} href="#">Contate-nos</Navbar.Link>

                </Navbar.Collapse>
            </Navbar>
        </header >
        <main className="w-full z-1">
            <section>
                <div className="w-9/12 m-auto flex justify-between">
                    <div className="w-8/12">
                        <h1 className="text-center text-3xl font-semibold font-mono ">Quem somos?</h1>
                        <p className="text-xl font-serifl">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quaerat velit facere odit, deserunt maxime nostrum laborum, ut illo blanditiis explicabo eligendi unde rerum aliquid labore dolore. Minus, temporibus reprehenderit. consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nisi sunt labore aliquam perferendis ullam atque nulla maxime illo praesentium molestias inventore quia amet ipsam nobis quos repudiandae perspiciatis deserunt? adipisicing elit. Aliquam vel, est magnam aliquid quibusdam eligendi. Dolorem maiores voluptatum illum enim! Repudiandae voluptate quisquam veniam voluptas dicta iusto dolore vero quo!</p>
                    </div>
                    <div>
                        <img src="https://images.ctfassets.net/3mv54pzvptwz/55YLwKPDnRXkqMBITRpWbC/0c2aefc04afa455c20e9ca0d209698e0/53174188191_42d4c831ae_o.jpg" className="w-[25em] h-[35rem]" alt="Foto da equipe" />
                    </div>
                </div>
            </section>
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="basis-1/3">
                        <div>
                            <div></div>
                            <div><p>Preço</p><p>Nome</p></div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/3"><div>
                        <div></div>
                        <div><p>Preço</p><p>Nome</p></div>
                    </div></CarouselItem>
                    <CarouselItem className="basis-1/3"><div>
                        <div></div>
                        <div><p>Preço</p><p>Nome</p></div>
                    </div></CarouselItem>
                </CarouselContent>
                <CarouselPrevious></CarouselPrevious>
                <CarouselNext></CarouselNext>
            </Carousel>

        </main>

    </>)
}