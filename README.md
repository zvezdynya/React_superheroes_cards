1. Что такое props и можно ли использовать props в функциональных компонентах?
Ответ: Props - коллекция ассоциированных со значением компонентов. Они позволяют создавать динамические компоненты, не зависящие от статически закодированных данных, а props, как параметр, передаваемый в функцию компонента, инкапсулирует свойства объекта. Да, в функциональных компонентах props тоже используется в качестве параметра функции, который возвращает реакт-элемент.
2. Нужно ли выделять в отдельный компонент статью в блоге?
Ответ: если следовать принципам DRY/DIE, то, т.к. этот объект статьи в блоге, вероятнее всего, будет в последствии переиспользоваться, то лучше выделить его в отдельный компонент.
3. Можно ли использовать React без JSX?
Ответ: В целом, можно, но тогда сложные компоненты + условные конструкции стали бы очень громоздкими и сложночитаемыми/сложноподдерживаемыми, поэтому разработчики в основном используют реакт совместно с jsx.
4. Чем отличается JSX от HTML?
Ответ: В jsx вместо атрибута class используется className и одиночные теги обязательно должны быть закрыты(<br />, <img />, <hr />).
5. Для чего нам нужны свойства (props) компонентов? 
Ответ: Для переиспользования компонентов, а не написания нового кода под каждый новый подобный элемент.Таким образом мы сможем брать данные элемента и подставлять их в каждый новый идентичный создаваемый компонент.
6. В примере с `CardList` чем можно было бы заменить `<React.Fragment>`?
Ответ: Можно использовать просто <div></div>, если он не ломает верстку и допустим для использования в нашей задаче, либо <></> пустые угловые скобки, но этот способ поддерживают не все популярные инструменты.
7. Можно ли сказать, что классовые и функциональные компоненты равнозначны по функциональности?
Ответ: Да, оба вида компонентов эквивалентны друг другу, а отличия будут понятны после изучения внутреннего состояния компонента.
8. Можно ли полностью описать приложение, используя только функциональные компоненты? 
Ответ: Опираясь на нынешние знания, я бы сказала, что да. 
9. Какой командой мы делаем экспорт компонента для возможности его использования в других местах приложения? 
Ответ: export default ...component_name...
10. Изучите структуру компонент в проекте https://github.com/alisa-tsvetkova/EthereumUI и напишите, какой именно компонент является самым верхним, а какой самым «глубоким»?
Ответ: Самый верхний - <Router></Router>(BrowserRouter экспортируется с псевдонимом Router из "react-router-dom"), самый "глубокий" - <Block></Block>(их два и они экспортируются из src/assets/components
/blockViewer.js).
11. Какой командой можно сгенерировать разметку/компоненты на основе заранее заданного массива элементов? Приведите пример.
-Ответ: 