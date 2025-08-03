import { ChefHat, Clock, Users, ExternalLink } from "lucide-react";

const Recipe = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-background min-h-screen pt-24">
      <div className="bg-card rounded-lg p-8 border border-border">
        {/* Recipe Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <ChefHat className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Pupusas Salvadoreñas
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Un platillo típico de El Salvador, delicioso y fácil de preparar. 
            Las pupusas son tortillas gruesas de masa de maíz rellenas con 
            diversos ingredientes como queso, frijoles y chicharrón.
          </p>
        </div>

        {/* Recipe Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Clock className="w-5 h-5 text-primary" />
            <span>Tiempo: 45 minutos</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Users className="w-5 h-5 text-primary" />
            <span>Porciones: 4 personas</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <ChefHat className="w-5 h-5 text-primary" />
            <span>Dificultad: Fácil</span>
          </div>
        </div>

        {/* Ingredientes Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Ingredientes
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>2 tazas de masa de maíz</li>
              <li>1 taza de agua tibia</li>
              <li>1/2 taza de queso rallado</li>
              <li>1/2 taza de frijoles refritos</li>
            </ul>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>1/4 taza de chicharrón molido</li>
              <li>1/2 taza de repollo rallado</li>
              <li>Sal al gusto</li>
              <li>Aceite para freír</li>
            </ul>
          </div>
        </section>

        {/* Pasos de Preparación Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Pasos de Preparación
          </h2>
          <ol className="list-decimal pl-6 text-muted-foreground space-y-4">
            <li className="leading-relaxed">
              <strong className="text-foreground">Preparar la masa:</strong> En un tazón grande, 
              mezcla la masa de maíz con agua tibia y sal. Amasa hasta obtener una masa suave y 
              manejable. Cubre y deja reposar por 10 minutos.
            </li>
            <li className="leading-relaxed">
              <strong className="text-foreground">Formar las pupusas:</strong> Toma una porción de 
              masa del tamaño de una pelota de golf. Haz un hueco en el centro y agrega el relleno 
              de tu elección (queso, frijoles, chicharrón). Cierra la masa alrededor del relleno 
              y aplana suavemente para formar un disco de aproximadamente 4 pulgadas de diámetro.
            </li>
            <li className="leading-relaxed">
              <strong className="text-foreground">Cocinar:</strong> Calienta un comal o sartén a 
              fuego medio. Coloca las pupusas y cocina hasta que se doren por ambos lados, 
              aproximadamente 3-4 minutos por lado.
            </li>
            <li className="leading-relaxed">
              <strong className="text-foreground">Servir:</strong> Sirve calientes acompañadas de 
              curtido (repollo en vinagre) y salsa de tomate. ¡Disfruta de este platillo típico 
              salvadoreño!
            </li>
          </ol>
        </section>

        {/* External Link */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
          <p className="text-muted-foreground mb-2">
            ¿Quieres aprender más recetas salvadoreñas?
          </p>
          <a
            href="https://www.allrecipes.com/recipe/270440/salvadoran-pupusas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>Ver más recetas aquí</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Footer */}
        <footer className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Receta creada por Wilmer Salazar - Actividad UFG
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Recipe