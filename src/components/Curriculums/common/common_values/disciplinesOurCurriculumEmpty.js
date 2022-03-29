const disciplinesOurCurriculumEmpty = (id, disciplines) => {
    let disciplinesCurriculum = [];

    disciplines.forEach(el => {
        if (el.curriculum_id == id) disciplinesCurriculum.push(el);
    })

    return disciplinesCurriculum;
}

export default disciplinesOurCurriculumEmpty; 