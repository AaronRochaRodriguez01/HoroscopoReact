import React from "react";
import { useState } from "react";
import "./FormHoroscopo.css";

function FormHoroscopo() {
  const dataHoroscopo = [
    {
      lang: "Acuario",
      url: "https://resizer.glanacion.com/resizer/v2/horoscopo-de-acuario-de-hoy-martes-23-de-IFTEWWBZQVHUNOH7XQQYGB4MXY.png?auth=41e37bbd5a96f52152eed8df817dfa039a9a609fb274d5c94b99129fd130e606&width=320&height=213&quality=70&smart=true",
      descripcion:
        "Influenciado por Urano, astro de la deidad del cielo, este signo de aire eleva la intelectualidad. A pesar de su excentricidad, los acuarianos congenian en grupos como nadie. Espejados en las estrellas por una aguatera derramando agua de inmortalidad sobre la Tierra, empatizan con causas mayores y crean comunidad para marchar por cambios trascendentales.",
    },
    {
      lang: "Piscis",
      url: "https://resizer.glanacion.com/resizer/v2/horoscopo-de-piscis-de-hoy-martes-23-de-O6JX6NBIM5BMFHJQCU4U36COMQ.png?auth=363ad051e62e841c0b1307f29d6cf78d738bac6f5b5c4b712e22a3d7bb83ba51&width=320&height=213&quality=70&smart=true",
      descripcion:
        "Regido por Neptuno, planeta azul asociado al dios del mar, este signo de agua hace a personas sensibles, intuitivas y altruistas, que diluyen barreras y llevan todo lo que hacen más allá con su extraordinaria imaginación. Los peces nadando en direcciones opuestas en el océano estelar denotan su profundidad, su compasión tras explorar caminos adversos, y su capacidad de fluir.",
    },
    {
      lang: "Aries",
      url: "https://resizer.glanacion.com/resizer/v2/horoscopo-de-aries-de-hoy-martes-23-de-septiembre-IYNLCDBRTJEBLBHTLPGMQMQNC4.png?auth=60f46b3f24326a6d6282105ddd84e29442b24afe5704ed6811d0bbefce164cd2&width=320&height=213&quality=70&smart=true",
      descripcion:
        "¡Eres de Aires! Gobernado por Marte, planeta relacionado con el dios romano de la guerra, este signo de fuego enciende nuevos comienzos. Bautizado a partir del mito griego del Carnero Dorado, Aries se destaca por la audacia. Emprender y abrir paso a un nuevo camino es típico de los pioneros de este signo que vibran alto, inspiran y se dejan llevar por el impulso, la pasión y la intuición.",
    },
    {
      lang: "Tauro",
      url: "https://resizer.glanacion.com/resizer/v2/horoscopo-de-tauro-de-hoy-martes-23-de-septiembre-MWQ4R75PAVHIRCR37JEKHQ2PAU.png?auth=2c049e4b965f386faa5e2cfdb072e11520cf666eaf2d4339792134208d687aeb&width=320&height=213&quality=70&smart=true",
      descripcion:
        "Reinadas por Venus, cuerpo celeste asociado a la divinidad del amor y la belleza, las personas de este signo conectado con la tierra, son manifestadoras de belleza y abundancia. En sintonía con su cuerpo y con la naturaleza, los taurinos conocen sus placeres y su valor, ¡y lo hacen valer! Si bien el cambio les incomoda, una vez que comienza a correr el toro en su interior, ¡no hay quién lo detenga!",
    },
    {
      lang: "Géminis",
      url: "https://resizer.glanacion.com/resizer/v2/horoscopo-de-geminis-de-hoy-martes-23-de-7INK7P2TFVEFXJJOZANC4HJHJU.png?auth=c7df86f3d7e741def68575107fb9babeb526d7cc5a13c400124b7db1ba74e773&width=320&height=213&quality=70&smart=true",
      descripcion:
        "Regido por Mercurio, astro vinculado al mensajero de los dioses, este signo intelectual se distingue por sus dones comunicativos. Como el aire que se amolda a las formas sólidas, los geminianos son sumamente adaptables. Inspirado en la constelación de los gemelos, este signo permite tener una opinión y al día siguiente explorar la contraria sin remordimiento. La creatividad, el humor y la frescura también lo caracterizan.",
    },
    {
      lang: "Cáncer",
      url: "https://resizer.glanacion.com/resizer/v2/horoscopo-de-cancer-de-hoy-martes-23-de-YZ7HCMJTLJF3BDVEPQQXBFK24E.png?auth=85749b151fb461e353613fe8cc922ea3fe8c4e8c0d1a36df4687ef661849b4f5&width=320&height=213&quality=70&smart=true",
      descripcion:
        "Influenciado por la luna, este signo de agua hace a personas sumamente emocionales que nutren y se nutren del hogar y la familia. Como la constelación del cangrejo, los cancerianos protegen sus sentimientos más profundos con un caparazón. La memoria con un tinte de nostalgia y la intuición también delinean su personalidad. ¿Resuena contigo?",
    },
    {
      lang: "Leo",
      url: "https://resizer.glanacion.com/resizer/v2/horoscopo-de-leo-de-hoy-martes-23-de-septiembre-WU7L6XLT3NA75D4UCK7DZGZ224.png?auth=680b627165f0b6186408a71e6b01786974c5db637d8ff62cec6673db6d85f22a&width=320&height=213&quality=70&smart=true",
      descripcion:
        "Regido por el astro rey, este signo de fuego hace a los leoninos brillar con su esencia creativa e iluminar al prójimo, inspirándolo a rugir a su lado. Como el león que dibujan las estrellas, las personas de este signo se destacan por su gigantesco corazón que irradia confianza y generosidad.",
    },
    {
      lang: "Virgo",
      url: "https://resizer.glanacion.com/resizer/v2/horoscopo-de-virgo-de-hoy-martes-23-de-septiembre-CUOMSGHOE5GEBJ4RFLHRBNXZAY.png?auth=dcbde422104d43687b00d0c0e7d8574c83c0ad2e50b688ac10a559873bbf5468&width=320&height=213&quality=70&smart=true",
      descripcion:
        "Reinado por Mercurio, el mismo provee el don de bajar ideas a tierra. No por nada, la agenda y la rutina son mejores amigas de los virginianos, que a pesar de esto, no prescinden de la flexibilidad y son sumamente analíticos. Asociados a la figura de una virgen, buscan la purificación y el perfeccionismo en todos los ámbitos, y por eso tienden a profundizar en rubros como la salud y el bienestar.",
    },
    {
      lang: "Libra",
      url: "https://resizer.glanacion.com/resizer/v2/horoscopo-de-libra-de-hoy-martes-23-de-septiembre-ZQUM6PDKW5E5NFJ3EOOCDYDUTA.png?auth=6c14a39ef2812e9b0664677d205769ce6187c6a5cd63048b72616e2db794f297&width=320&height=213&quality=70&smart=true",
      descripcion:
        "Gobernados por Venus, los librianos son conocidos por entrar en simbiosis con la estética y por formar alianzas y parejas. El intelecto también es representativo de este signo de aire. Inspirado en la balanza estelar, Libra hace a personas equilibradas que buscan mantener la armonía y la diplomacia. ¿Te sientes identificado?",
    },
    {
      lang: "Escorpio",
      url: "https://resizer.glanacion.com/resizer/v2/horoscopo-de-escorpio-de-hoy-martes-23-de-MP7OWDW2J5EORM3SMVFJV3BHFI.png?auth=3436d776d339fa92e5496b4a7b2e1d6cd6fdb53ff3044e1380466d616f73005d&width=320&height=213&quality=70&smart=true",
      descripcion:
        "Regido por Plutón, astro asociado a la deidad del inframundo, este signo de agua hace a personas intuitivas y esotéricas. Debido a sus grandes apegos, el cambio les cuesta, si bien el don de renacer es la particularidad que hace a los escorpianos poderosos. Ellos son magnéticos, seductores y románticos; cuando se enamoran, aspiran a fusionarse. También son muy habilidosos administrando recursos ajenos.",
    },
    {
      lang: "Sagitario",
      url: "https://resizer.glanacion.com/resizer/v2/horoscopo-de-sagitario-de-hoy-martes-23-de-6B2JEVQSGRHILAJES2ILUULVX4.png?auth=a5c1c40b7e242f16af3ad4fc714e13bf89e34b37fd946af8ce9e3d7c7c33578f&width=320&height=213&quality=70&smart=true",
      descripcion:
        "Gobernado por Júpiter, planeta del padre de los dioses, las personas de este signo fogoso son inspiradoras y grandes maestras. En conexión con la constelación del centauro que dispara su flecha hacia arriba, los más optimistas del Zodíaco apuntan a nuevos horizontes. Fanáticos de los viajes y la aventura, todo lo que implique una expansión mental, como la filosofía o la astrología, ilumina a los sagitarianos.",
    },
    {
      lang: "Capricornio",
      url: "https://resizer.glanacion.com/resizer/v2/horoscopo-de-capricornio-de-hoy-martes-23-de-4JFTMER3Q5FANKMD7LEQ5UCZP4.png?auth=87087884ce61e3e94e4e9cb80fd4c9285398429427a81b124e509e2e9c96c568&width=320&height=213&quality=70&smart=true",
      descripcion:
        "Al compás de Saturno, planeta anillado y dios guardián del tiempo, este signo terrenal caracteriza a personas trabajadoras, estructuradas y disciplinadas que aspiran al éxito y en muchos casos cargan con el deber ser. Su romance con el tiempo las hace amantes de la música. Representados por la constelación de la cabra con cola de pez, los capricornios son todoterreno y siempre van por más.",
    },
  ];

  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [horoscopo, setHoroscopo] = useState("");
  const url = dataHoroscopo.find((h) => h.lang === horoscopo)?.url;

  const calcularHoroscopo = (fechaNacimiento) => {
    const fecha = new Date(fechaNacimiento);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;

    let signo = "";

    if ((mes === 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
      signo = "Acuario";
    } else if ((mes === 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
      signo = "Piscis";
    } else if ((mes === 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
      signo = "Aries";
    } else if ((mes === 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
      signo = "Tauro";
    } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
      signo = "Géminis";
    } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
      signo = "Cáncer";
    } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
      signo = "Leo";
    } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
      signo = "Virgo";
    } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
      signo = "Libra";
    } else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
      signo = "Escorpio";
    } else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
      signo = "Sagitario";
    } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
      signo = "Capricornio";
    }

    const horoscpoEnc = dataHoroscopo.find((h) => h.lang === signo);
    if (horoscpoEnc) {
      setHoroscopo(horoscpoEnc.lang);
      setDescripcion(horoscpoEnc.descripcion);
    }
  };
  return (
    <>
      <div
        className="min-h-screen flex flex-col items-center justify-center px-4"
        style={{
          background: "linear-gradient(to bottom, #0a192f, #1e293b, #0f172a)",
        }}
      >
        <h1 className="text-center text-3xl font-extrabold text-yellow-300 mb-10 drop-shadow-md tracking-wider">
          Descubre tu Horóscopo
        </h1>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* FORMULARIO */}
          <form
            className="bg-white/5 backdrop-blur-xl border border-yellow-400/30 p-6 rounded-2xl shadow-lg w-80 text-white"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="block mb-2 font-semibold">
              Ingresa tu nombre:
            </label>
            <input
              type="text"
              className="w-full border border-yellow-400/50 bg-transparent p-2 rounded mb-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingresa tu nombre"
            />

            <label className="block mb-2 font-semibold">
              Fecha de nacimiento:
            </label>
            <input
              type="date"
              className="w-full border border-yellow-400/50 bg-transparent p-2 rounded mb-6 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
            />

            <button
              type="button"
              onClick={() => calcularHoroscopo(fechaNacimiento)}
              className="mt-2 w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-semibold px-4 py-2 rounded-lg shadow-md hover:from-yellow-600 hover:to-orange-700 transition-all"
            >
              Saber Horóscopo
            </button>
          </form>

          {horoscopo && (
            <div
              className="p-6 rounded-2xl shadow-lg w-96 text-white border border-yellow-400/30"
              style={{
                background:
                  "linear-gradient(to bottom right, rgba(255,215,0,0.15), rgba(10,25,47,0.95))",
              }}
            >
              <h2 className="text-2xl font-bold text-center text-yellow-300 mb-4 drop-shadow">
                Tu signo es: {horoscopo}
              </h2>
              {url && (
                <img
                  src={url}
                  alt={horoscopo}
                  className="mx-auto mb-4 object-contain rounded-md"
                  style={{ width: "480px", height: "200px" }}
                />
              )}
              <p className="text-gray-200 text-justify leading-relaxed">
                {nombre ? (
                  <span className="font-semibold">{nombre}:</span>
                ) : null}{" "}
                {descripcion}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FormHoroscopo;
