import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const About = () => {
    return (
        <div className="">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1>My name is Wilmer Henrry Salazar Martinez</h1>
            <p>I'm a Software Developer</p>
            <section>
                <h2>About me</h2>
                <p>I like working out</p>
                <p>I like coding</p>
                <p>I like learning about cloud computing</p>
            </section>
            <section>
                <h2>My hobbies</h2>
                <ul>
                    <li>Cloud Computing</li>
                    <li>Learning about IA</li>
                    <li>Blockchain technologies</li>
                    <li>Disruptive technologies</li>
                </ul>
            </section>
            <footer>
                <p>© 2025 Wilmer Salazar</p>
            </footer>
        </div>
    )
}

export default About