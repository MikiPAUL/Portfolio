const Hero = () => {
    return (
        <header className="bg-primary bg-hero bg-cover pt-24 px-48 text-white pb-80 bg-blend-multiply">
            <nav>
                <div className="flex justify-between">
                    <h2 className="text-white">Mikipedia</h2>
                    <ul className="flex gap-8 items-center"> 
                        <li key='home'><a href='#'>Home</a></li>
                        <li key='about'><a href='#'>About</a></li>
                        <li key='skills'><a href='#'>Skills</a></li>
                        <li key='portfolio'><a href='#'>Portfolio</a></li>
                        <li key='contact'><a href='#'>Contact</a></li>
                    </ul>
                </div>
            </nav>
            <article className="pt-36">
                <h1>Hi, It's Miki Paul</h1><br/> <span className="block ">Developer from India</span> <a href="">
                    <span className="underline"> Latest works </span></a> 
            </article>
        </header>
    );
}

export default Hero;