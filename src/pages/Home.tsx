import { User, ChefHat, Image } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-6 pt-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Actividad de UFG
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Desarrollo Web Multiplataforma
          </h2>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Esta actividad forma parte de la asignatura <strong className="text-foreground">Introducción a HTML y CSS</strong> 
            en la Universidad Francisco Gavidia (UFG).
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            El objetivo es aprender a construir páginas web utilizando HTML para la estructura, 
            CSS para el estilo, y React con Tailwind CSS para una implementación moderna. 
            A lo largo de la actividad, trabajaremos en:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-card border border-border rounded-lg p-6 text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <User className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Perfil Personal</h3>
              <p className="text-sm text-muted-foreground">
                Creación de una página de perfil personal con información básica
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <ChefHat className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Receta Culinaria</h3>
              <p className="text-sm text-muted-foreground">
                Elaboración de una receta culinaria con ingredientes y pasos
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Image className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Galería de Imágenes</h3>
              <p className="text-sm text-muted-foreground">
                Diseño de una galería de imágenes flexible con CSS
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Nota:</strong> Las páginas de Profile, Recipe y Gallery requieren autenticación. 
              Por favor, inicia sesión para acceder a estas secciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home