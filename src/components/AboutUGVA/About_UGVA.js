import React from "react";
import {List} from "semantic-ui-react";

import "./About_UGVA.css";

import imgUGVA from "../../assets/images/ugva-man_img.png";
import article1 from "../../assets/articles/article_UGVA.pdf";
import article2 from "../../assets/articles/RAI-2019-173-181.pdf";
import article3 from "../../assets/articles/RAI-2020-220-228.pdf";

const About_UGVA = () => {
    return (
        <div className="app_content_text">
            <h2 className="header">О методе UGVA</h2>
            <div className="about-ugva_content">
                <article className="about-ugva_content_article">
                    <p><b>Метод "унифицированного графического воплощения активности" (Unified Graphic Visualization
                        of Activity, UGVA, УГВА)</b> - это метод визуального представления профессионального профиля подготовки,
                        выраженного
                        в виде антропоморфного образа, с целью показать особенности его содержания и быстрого
                        сравнения профилей
                        между собой. Пример визуализации в нотации UGVA представлен на рисунке 1.</p>

                    <p>В основу метода UGVA легли подходы когнитивной графики - "бодикодер" Филимонова,
                        "фейкодер" Джоунса, лица Чернова. Методы когнитивной графики позволяют эффективно
                        визуализировать
                        многомерные данные для их последующего анализа.
                    </p>

                    <figure className="about-ugva_content_img">
                        <img src={imgUGVA} alt="UGVA визуализация"/>
                        <figcaption>Рисунок 1. Визуальный образ в нотации UGVA</figcaption>
                    </figure>

                    <p><b>Метод UGVA может применяться для широкого круга задач:</b></p>
                    <ol className="about-ugva_content_article_list">
                        <li>сравнение учебных программ внутри ВУЗа, на предмет выявления их перспектив,
                            балансировки их содержания и выделения новых направлений развития;
                        </li>
                        <li>сравнение учебных программ между ВУЗами, на предмет выявления их конкурентных
                            преимуществ и обоснования открытия новых программ подготовки;
                        </li>
                        <li>сравнение профиля подготовки отдельных учащихся как на этапе обучения, так и на
                            этапе профотбора;
                        </li>
                        <li>сравнение специфики реализации подготовки при специализации в рамках конкретной УП
                            ВУЗа;
                        </li>
                        <li>формирование профиля образовательной подготовки индивида</li>
                        <li>выявление трендов и новых направлений профессий.</li>
                    </ol>

                    <hr/>
                    <h3>Для погружения, предлагаем ознакомиться со следующими статьями:</h3>
                    <hr/>

                    <div className="about-ugva_content_download-list">
                        <List>
                            <List.Item>
                                <List.Icon name='file pdf outline'/>
                                <List.Content>
                                    <a href={article1} download> Метод
                                        унифицированного графического воплощения активности. В.А. Углев </a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='file pdf outline'/>
                                <List.Content>
                                    <a href={article2} download> Модель
                                        для оценки баланса учебной нагрузки методом UGVA для подготовки специалистов
                                        в области ИИ. В.А. Углев, М.В. Некрасов </a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='file pdf outline'/>
                                <List.Content>
                                    <a href={article3} download> Оценка
                                        баланса нагрузки по учебной программе магистратуры направления
                                        "системный анализ и управление" методом UGVA. В.А. Углев, Д.А. Проценко </a>
                                </List.Content>
                            </List.Item>
                        </List>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default About_UGVA;