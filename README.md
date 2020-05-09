<div align="center">
	<img src="https://user-images.githubusercontent.com/39541807/81132560-3a20a000-8f25-11ea-8179-4f4540936787.png">
	<h1> React Native Concepts</h1>
</div>
<p align="center">In this initial module we learn the main react native concepts.</p>
<div display="inline" align="center">
<img src="https://img.shields.io/github/license/juniortrojilio/concept-react-native-gostack">
</div>

---


## O que é React Native?

- Versão do React para desenvolvedores mobile.
- Multiplataforma : IOS / ANDROID
- Manipulação de cada plataforma separadamente em um mesmo código
- Interface Nativa
- Código não é transpilado

---

## Arquitetura

JS → Metro Bundler (Packager) → Bundle → Bridge (Ponte JS → Código Nativo) 

---

## Sintaxe

- A declaração de componentes é igual ao web

Exemplo:

```bash
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native'

function Button(){
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.text}>Enviar</Text>
			</TouchableOpacity>
		</View>
	)
}
```

- Não usamos HTML e sim componentes próprios
- Aplicamos estilos sem classes ou ids
- Todo texto é <Text /> não existe estilização própria

Exemplo de estilização própria:

```bash
const styles = StyleSheet.create({
	container : {
		alignItems : 'center',
	},
	button : {
		backgroundColor : '#7159c1',
	},
	text : {
	  fontWeight : 'bold',
	},
})
```

---

## Elementos do React-Native

Elementos não possuem valor semântico, todos são utilizados de forma abstrata.

- View - Container semelhante a div, footer, header, main, section, aside....
- Text - Utilizado para texto semelhante a h1, p, h2, h3 ...
- Todos componentes possuem por padrão 'display : flex'

---

## Estilização

Feita sempre utilizando CSS com a sintaxe do react-native substituindo o traço por Camel Case.

- Não criamos código CSS separado, tudo é feito como constante dentro do próprio javascript

Exemplo : 

```jsx
const styles = StyleSheet.create({
	//declaramos o nome da estilização
	container : {
		//aqui vai as propriedades
		backgroundColor : '#7159c1'
	}
})
```

---

## Axios

IOS Simulador - localhost

IOS Disp. Físico - IP da máquina

Android Simulador - [localhost](http://localhost) - necessário comando abaixo

```jsx
adb reverse tcp:{{PORTA}} tcp:{{PORTA}}
```

Android Simulador - Android Studio : 10.0.2.2

Android Disp. Físico : IP da máquina

---
<p align="center"> <> with 💙 by <a href="https://github.com/juniortrojilio">Junior Trojilio<a> </p>
