const GeneralInformationAboutCurriculum = ({ourCurriculum}) => {

    return (
        <div>
            <table className="curriculum-review_table_about-curriculum">
                <tr>
                    <td>Полное наименование:</td>
                    <td>{ourCurriculum.full_name}</td>
                </tr>
                <tr>
                    <td>Специальность:</td>
                    <td>{ourCurriculum.speciality_id}</td>
                </tr>
                <tr>
                    <td>Год начала обучения:</td>
                    <td>{ourCurriculum.year} г.</td>
                </tr>
                <tr>
                    <td>Университет:</td>
                    <td>{ourCurriculum.university_id}</td>
                </tr>
                <tr>
                    <td>Ступень:</td>
                    <td>{ourCurriculum.degree_id}</td>
                </tr>
            </table>
            <article className="curriculums-review_article">
                <h3 className="curriculums-review_article_header">Дополнительно об учебном плане</h3>
                <div  className="curriculums-review_article_text">
                    <p>{ourCurriculum.about}</p>
                </div>
            </article>
        </div>
    )
}

export default GeneralInformationAboutCurriculum;