import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet }  from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#000', '#999', '#000']}
      style={styles.container}
    >
      <ScrollView style={styles.container}>

        <Text style={styles.titulo}>
          CORPO DE BAILE
        </Text>

        <Text style={styles.subtitulo}>
          da Secretaria da Cultura de Valinhos
        </Text>

        <View style={styles.linha} />

        <Text style={styles.texto}>
            O Corpo de Baile da Secretaria da Cultura de Valinhos é um dos grupos estáveis mais tradicionais do cenário artístico paulista. Fundado em 1987, o projeto foi estruturado pela Prefeitura de Valinhos para suprir a necessidade de oferecer aos alunos avançados do Centro Cultural Vicente Musselli uma plataforma de aperfeiçoamento técnico e vivência profissional de palco. Com quase 40 anos de trajetória, o elenco principal e o Pré-Corpo de Baile transitam por vertentes como o ballet clássico e jazz sob a direção dos coreógrafos Alessandra Pozzuto e Danilo Coelho.
        </Text>

        <Text style={styles.texto}>
            Para integrar esse elenco de destaque em festivais, os candidatos precisam passar por um rigoroso processo seletivo anual cujos requisitos variam de acordo com a categoria. Para o Pré-Corpo de Baile, a faixa etária exigida fica entre os 11 e 15 anos, enquanto o Corpo de Baile Principal recruta bailarinos a partir dos 16 anos. Em ambos os casos, é indispensável que o candidato comprove experiência prévia e domínio prático avançado em ballet clássico — incluindo a técnica de sapatilhas de ponta para as mulheres — e em jazz dance, além de possuir total disponibilidade de horários para a intensa rotina de ensaios e viagens.
        </Text>

        <Text style={styles.texto}>
            As audições técnicas acontecem geralmente em meados do ano nas salas do Centro Cultural Vicente Musselli e exigem dos inscritos a apresentação de documentos como cópia do RG, comprovante de residência e foto 3x4. No dia do exame, a banca avaliadora submete os candidatos a testes práticos que simulam aulas técnicas dessas modalidades, além de avaliações coreográficas e uma entrevista individual. Os aprovados no grupo principal garantem o direito de representar o município oficialmente e contam com uma ajuda de custo mensal oferecida pela prefeitura para apoiar sua dedicação à dança.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>
            Ballet Clássico
          </Text>

          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/a0/bf/f2/a0bff263b0e78894e6d6bce001363eea.jpg',
            }}
            style={styles.imagem}
          />

          <Text style={styles.texto}>
            O ballet clássico é uma dança artística que combina técnica corporal rigorosa, expressão dramática e musicalidade para criar movimentos de extrema precisão e leveza.
          </Text>

          <Text style={styles.texto}>
            A arte surgiu no século XV nas cortes da Itália, mas foi na França do século XVII, sob o reinado de Luís XIV, que ela se profissionalizou. Devido a essa forte influência francesa, todos os termos técnicos da modalidade são falados em francês no mundo inteiro até hoje.
          </Text>

          <Text style={styles.texto}>
            Sua técnica estruturada baseia-se no en dehors — a rotação externa das pernas a partir do quadril — e no alinhamento vertical perfeito da coluna. As bailarinas utilizam sapatilhas de ponta para sustentar o peso do corpo nos dedos dos pés, criando o famoso efeito visual de flutuação. Todos os passos partem de cinco posições básicas de pés e braços.
          </Text>

          <Text style={styles.texto}>
            Para os praticantes, o ballet traz grandes benefícios físicos e mentais. Ele promove a correção postural, fortalece o abdômen, tonifica os músculos e aumenta a flexibilidade. Além disso, a atividade desenvolve a coordenação motora, o ritmo, a concentração e a disciplina necessária para memorizar sequências complexas.
          </Text>

        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>
            Jazz Dance
          </Text>

          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/16/aa/eb/16aaeb1c4e5ffdca4c7f3f1ee8eed970.jpg',
            }}
            style={styles.imagem}
          />

          <Text style={styles.texto}>
            O jazz dance é uma forma de dança vibrante, enérgica e extremamente expressiva, caracterizada pela mistura de técnica estruturada com a liberdade de improvisação. Ao contrário do ballet, que busca a leveza e a verticalidade, o jazz abraça a energia pulsante, o ritmo sincopado e a conexão direta com a música popular.
          </Text>

          <Text style={styles.texto}>
            A modalidade surgiu nos Estados Unidos entre o final do século XIX e o início do século XX. Sua origem está profundamente enraizada na cultura afro-americana, nascendo da fusão das danças tradicionais dos povos escravizados com as danças sociais europeias. Ao longo das décadas, o estilo evoluiu dos salões de jazz e palcos da Broadway até se transformar em uma disciplina técnica ensinada em academias do mundo inteiro.
          </Text>

          <Text style={styles.texto}>
            A técnica do jazz é rica e utiliza o peso do corpo a favor do movimento, em uma relação mais próxima com o chão (grounded). Entre os seus pilares principais estão o isolamento corporal — a capacidade de mover uma parte do corpo de cada vez —, além de giros velozes, chutes altos e saltos explosivos. Embora tenha sua própria identidade, o jazz utiliza a base de sustentação e o alinhamento do ballet clássico para executar seus movimentos com precisão.
          </Text>

          <Text style={styles.texto}>
            Praticar jazz dance traz inúmeros benefícios para o corpo e para a mente. Por ser uma atividade aeróbica intensa, ela melhora significativamente o condicionamento cardiovascular, queima calorias e desenvolve a agilidade e a coordenação motora. Além disso, a dança estimula a expressão artística, aumenta a flexibilidade e a força muscular, funcionando também como uma excelente ferramenta para aliviar o estresse diário.
          </Text>
        </View>

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },


  titulo: {
    color: '#d8b4ff',
    fontSize: 34,
    textAlign: 'center',
  },

  subtitulo: {
    color: '#d8b4ff',
    textAlign: 'center',
    marginBottom: 35,
  },

  linha: {
    height: 2,
    backgroundColor: '#d8b4ff',
    marginHorizontal: 20,
    marginBottom: 20,
  },

  card: {
    backgroundColor: 'rgba(0,0,0,0.25)',
    margin: 15,
    padding: 15,
    borderRadius: 15,
  },

  cardTitulo: {
    color: '#d8b4ff',
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 10,
  },

  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },

  texto: {
    color: '#ddd',
    marginTop: 10,
    textAlign: 'center',
  },
});