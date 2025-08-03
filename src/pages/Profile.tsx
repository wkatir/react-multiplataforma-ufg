import { User, MapPin, Heart } from "lucide-react";

const Profile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background p-6">
      <div className="bg-card shadow-lg rounded-lg p-8 max-w-2xl w-full border border-border">
        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Wilmer Salazar
          </h1>
          <p className="text-muted-foreground text-lg">
            Desarrollador entusiasta con interés en desarrollo web e inteligencia artificial.
          </p>
          <div className="flex items-center justify-center gap-2 mt-3 text-green-600">
            <MapPin className="w-4 h-4" />
            <span className="font-semibold">San Salvador, El Salvador</span>
          </div>
        </div>

        {/* Sobre Mí Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            Sobre Mí
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Me apasiona aprender nuevas tecnologías, crear proyectos innovadores y 
            resolver problemas con soluciones creativas. Disfruto colaborar en equipo 
            y compartir conocimientos con otros desarrolladores. Mi objetivo es 
            contribuir al desarrollo de aplicaciones web modernas y accesibles.
          </p>
        </section>

        {/* Mis Hobbies Favoritos Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            Mis Hobbies Favoritos
          </h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Programar y aprender nuevas tecnologías de desarrollo web</li>
            <li>Escuchar música y descubrir nuevos artistas</li>
            <li>Explorar la naturaleza y hacer senderismo</li>
            <li>Leer libros sobre tecnología y ciencia ficción</li>
            <li>Jugar videojuegos y analizar su diseño</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Wilmer Salazar - Actividad UFG
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Profile