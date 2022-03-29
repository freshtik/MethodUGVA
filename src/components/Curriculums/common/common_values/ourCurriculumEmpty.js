const ourCurriculumEmpty = (id, curriculums) => {
    let curriculum = [];

    curriculums.forEach(el => {
        if (el.id == id) curriculum = el;
    });

    return curriculum;
}

export default ourCurriculumEmpty; 