var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl);
  for (let i = 0; i < startEl.children.length; i++) {
    let child = startEl.children[i];
    let elementsFound = traverseDomAndCollectElements(matchFunc, child);
    resultSet = [...resultSet, ...elementsFound];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";
  if (selector.split(".").length === 2) return "tag.class";
  return "tag";
};

console.log(selectorTypeMatcher("div"));

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function (element) {
      //element (ELEMENTO HTML) tiene el ID que estoy buscando. Ejemplo:
      //<div id="idOne"></div>
      return "#" + element.id === selector;
    };
  } else if (selectorType === "class") {
    matchFunction = function (element) {
      //element (ELEMENTO HTML) tiene la clase que estoy buscando. Ejemplo:
      //<div class="classOne classTwo"></div>
      let classes = element.classList;
      for (let i = 0; i < classes.length; i++) {
        if ("." + classes[i] === selector) return true;
      }
      return false;
    };
  } else if (selectorType === "tag.class") {
    matchFunction = function (element) {
      //element (ELEMENTO HTML) tiene el tag y la clase que estoy buscando. Ejemplo:
      //$(div.classOne) selector a buscar
      //<div class="classTwo"></div> elemento html
      let [t, c] = selector.split("."); //["div", "classOne"]
      //Uso la recursion para buscar el tag y la class por separado
      //selector("div") y selector(".classOne")
      //let funcionTag = matchFunctionMaker(t) => Esto me retorna una funcion por eso debo invocarla pasandole el element HTML que quiero comparar
      //funcionTag(element)
      return (
        matchFunctionMaker(t)(element) && matchFunctionMaker("." + c)(element)
      );
      //                  true              &&          false =  false
    };
  } else if (selectorType === "tag") {
    matchFunction = function (element) {
      //element (ELEMENTO HTML) tiene el tag que estoy buscando. Ejemplo:
      //<div></div>
      return element.tagName === selector.toUpperCase();
    };
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

// document.querySelector("#idOne"); //id
// document.querySelector(".classOne"); //class
// document.querySelector("div"); //tag
// document.querySelector("div.classOne"); //tag.class

//Crear nuestra propia libreria de funciones
// $("#idOne"); //Elemento HTML que contenga el id: idOne
