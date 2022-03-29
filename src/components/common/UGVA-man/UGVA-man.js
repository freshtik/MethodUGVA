import React from 'react';
import Sketch from "react-p5";
import { Button } from 'semantic-ui-react'

function UGVA_man(props) {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(resultWidth(), resultHeight_max()).parent(canvasParentRef)
    }
    let save_state_eps = false
    let save_state_jpg = false

    const neck_height = 10

    let canvas = null

    console.log(props.proportionsUGVA);

    // MAIN VARIABLES WITH DEFAULT VALUES
    let hat_size = props.proportionsUGVA.hat_size
    let head_radius = props.proportionsUGVA.head_radius
    let smile_coef = -props.proportionsUGVA.smile_coef

    let thorax_width = props.proportionsUGVA.thorax_width
    let thorax_height = props.proportionsUGVA.thorax_height

    let abdomen_width = props.proportionsUGVA.abdomen_width
    let abdomen_height = props.proportionsUGVA.abdomen_height

    let pelvis_l1_width = props.proportionsUGVA.pelvis_l1_width
    let pelvis_l1_height = props.proportionsUGVA.pelvis_l1_height

    let pelvis_l2_width = props.proportionsUGVA.pelvis_l2_width
    let pelvis_l2_height = props.proportionsUGVA.pelvis_l2_height

    let arm_right_height = props.proportionsUGVA.arm_right_height

    let shoulder_right_width = props.proportionsUGVA.shoulder_right_width
    let forearm_right_width = props.proportionsUGVA.forearm_right_width

    let arm_left_height = +props.proportionsUGVA.arm_left_height

    let shoulder_left_width = +props.proportionsUGVA.shoulder_left_width
    let forearm_left_width = +props.proportionsUGVA.forearm_left_width

    let leg1_width = props.proportionsUGVA.leg1_width
    let leg1_height = props.proportionsUGVA.leg1_height

    let leg2_width = props.proportionsUGVA.leg2_width
    let leg2_height = props.proportionsUGVA.leg2_height

    let leg3_width = props.proportionsUGVA.leg3_width
    let leg3_height = props.proportionsUGVA.leg3_height

    //Max variables
    let hat_max = props.max.hat_size
    let head_max = props.max.head_radius

    let thorax_width_max = props.max.thorax_width
    let abdomen_width_max = props.max.abdomen_width
    let pelvis_l1_width_max = props.max.pelvis_l1_width
    let pelvis_l2_width_max = props.max.pelvis_l1_width

    let shoulder_max = props.max.shoulder_left_width
    let forearm_max = props.max.forearm_left_width
    let leg_max = props.max.leg1_height

    let hat_color = props.colorsUGVA.hat_color
    let head_color = props.colorsUGVA.head_color

    let forearm_right_color = props.colorsUGVA.forearm_right_color
    let shoulder_right_color = props.colorsUGVA.shoulder_right_color
    let forearm_left_color = props.colorsUGVA.forearm_left_color
    let shoulder_left_color = props.colorsUGVA.shoulder_left_color

    let thorax_color = props.colorsUGVA.thorax_color
    let abdomen_color = props.colorsUGVA.abdomen_color
    let pelvis_l1_color = props.colorsUGVA.pelvis_l1_color
    let pelvis_l2_color = props.colorsUGVA.pelvis_l2_color

    let leg1_color = props.colorsUGVA.leg1_color
    let leg2_color = props.colorsUGVA.leg2_color
    let leg3_color = props.colorsUGVA.leg3_color



    const resultWidth = () => (100 + head_max * 2 + (forearm_max + shoulder_max) * 2);

// TOTAL HEIGHT COUNT METHOD
    const resultHeight = () => {
        return 10 + hat_size + head_radius + thorax_height + abdomen_height + pelvis_l1_height + pelvis_l2_height +
            Math.max([leg1_height, leg2_height, leg3_height]) + hat_size * 0.10 + neck_height;
    }

    const resultHeight_max = () => {
        return 10 + hat_max + head_max + thorax_width_max + abdomen_width_max + pelvis_l1_width_max + pelvis_l2_width_max +
            leg_max + (hat_max * 0.10) + neck_height * 10 - 200;
    }
    let indent = (resultHeight_max() - resultHeight()) / 2;

    const draw = p5 => {

        p5.rect(5, 5, resultWidth() - 10, resultHeight_max()-10)

        p5.translate(p5.width / 2, p5.height / 10)

        if (hat_size >= 0) {
            p5.fill(hat_color)

            p5.rect(-hat_size / 2, 0, hat_size, hat_size / 2)
            p5.translate(0, hat_size / 2)

            p5.rect(-hat_size * 0.9, 0, hat_size * 1.8, hat_size / 10)
            p5.translate(0, hat_size / 10 + head_radius / 2)

            p5.fill("#FFFFFF")
            //HAT'S PENT
        }

        // HEAD
        p5.fill(head_color)
        p5.ellipse(0, 0, head_radius)
        p5.ellipse(-head_radius / 5, -head_radius / 5, 6)
        p5.ellipse(head_radius / 5, -head_radius / 5, 6)
        //nose
        p5.line(0, 5, -5, 0)
        p5.line(0, 5, 5, 0)

        p5.translate(0, head_radius * 0.25)

        //smile
        p5.line(-head_radius / 8, 0, head_radius / 8, 0)
        p5.line(-head_radius / 8, 0, -head_radius / 4, smile_coef)
        p5.line(head_radius / 8, 0, head_radius / 4, smile_coef)

        p5.translate(0, head_radius * 0.25)

        // NECK
        p5.rect(-10, 0, 20, neck_height)

        p5.translate(0, neck_height)
        p5.fill("#FFFFFF")

        // BODY LEVEL 1
        p5.fill(thorax_color)
        p5.rect(-thorax_width / 2, 0, thorax_width, thorax_height)
        p5.fill("#FFFFFF")

        // HANDS
        //Hands_level1
        p5.fill("#FFFFFF")
        p5.rect(-thorax_width / 2, 0, -10, arm_right_height)
        p5.fill("#FFFFFF")
        p5.rect(thorax_width / 2, 0, 10, arm_left_height)
        p5.fill("#FFFFFF")

        //Hands_level2
        const point_arm2_left = thorax_width * 0.5
        const point_arm2_right = thorax_width * 0.5

        p5.fill(shoulder_left_color)
        if (shoulder_left_width > 0) {
            p5.beginShape();
            p5.vertex(thorax_width / 2 + 10, 0)
            p5.vertex(thorax_width / 2 + 10 + shoulder_left_width, thorax_width * 0.5)
            p5.vertex(thorax_width / 2 + 10 + shoulder_left_width, thorax_width * 0.5 + arm_left_height)
            p5.vertex(thorax_width / 2 + 10, arm_left_height)
            p5.vertex(thorax_width / 2 + 10, 0)
            p5.endShape();
        }
        p5.fill("#FFFFFF")

        p5.fill(shoulder_right_color)
        if (shoulder_right_width === 0){}
        else{
            p5.beginShape();
            p5.vertex(-thorax_width / 2 - 10, 0)
            p5.vertex(-thorax_width / 2 - 10 - shoulder_right_width, thorax_width * 0.5)
            p5.vertex(-thorax_width / 2 - 10 - shoulder_right_width, thorax_width * 0.5 + arm_right_height * 1)
            p5.vertex(-thorax_width / 2 - 10, arm_right_height)
            p5.vertex(-thorax_width / 2 - 10, 0)
            p5.endShape();
        }
        p5.fill("#FFFFFF")

        //Hands_level3
        p5.fill(forearm_left_color)
        p5.rect(thorax_width / 2 + 10 + shoulder_left_width, point_arm2_right, forearm_left_width, arm_left_height)
        p5.fill("#FFFFFF")
        p5.fill(forearm_right_color)
        p5.rect(-thorax_width / 2 - 10 - shoulder_right_width, point_arm2_left, -forearm_right_width, arm_right_height)
        p5.fill("#FFFFFF")

        //Hands level4
        p5.fill("#FFFFFF")
        p5.rect(thorax_width / 2 + 10 + shoulder_left_width + forearm_left_width, point_arm2_right, 15, arm_left_height)
        p5.fill("#FFFFFF")
        p5.rect(-thorax_width / 2 - 10 - shoulder_right_width - forearm_right_width, point_arm2_left, -15, arm_right_height)
        p5.fill("#FFFFFF")

        p5.translate(0, thorax_height)

        // BODY LEVEL 2
        p5.fill(abdomen_color)
        p5.rect(-abdomen_width / 2, 0, abdomen_width, abdomen_height)
        p5.fill("#FFFFFF")

        p5.translate(0, abdomen_height)

        // BODY LEVEL 3
        p5.fill(pelvis_l1_color)
        p5.rect(-pelvis_l1_width / 2, 0, pelvis_l1_width, pelvis_l1_height)
        p5.fill("#FFFFFF")

        p5.translate(0, pelvis_l1_height)

        // BODY LEVEL 4
        p5.fill(pelvis_l2_color)
        p5.rect(-pelvis_l2_width / 2, 0, pelvis_l2_width, pelvis_l2_height)
        p5.fill("#FFFFFF")

        p5.translate(0, pelvis_l2_height)

        //LEGS
        if (leg1_width >= 10) {
            p5.fill(leg1_color)
            p5.rect(-pelvis_l2_width / 2.2, 0, -leg1_width, leg1_height)
            p5.fill("#FFFFFF")
        }
        if (leg2_width >= 10) {
            p5.fill(leg2_color)
            p5.rect(-leg2_width / 2, 0, leg2_width, leg2_height)
            p5.fill("#FFFFFF")
        }
        if (leg3_width >= 10) {
            p5.fill(leg3_color)
            p5.rect(pelvis_l2_width / 2.2, 0, leg3_width, leg3_height)
            p5.fill("#FFFFFF")
        }

        if (save_state_eps === true) {
            p5.saveCanvas('ugva_eps', 'eps');
            save_state_eps = false
        }
        if (save_state_jpg === true) {
            p5.saveCanvas('ugva_jpg', 'jpg');
            save_state_jpg = false
        }
    }

    return (
        <div>
            <Sketch setup={setup} draw={draw}/>
            <Button.Group attached='bottom' color='blue'>
                <Button onClick={event => save_state_eps = true}> Сохранить (eps)</Button>
                <Button onClick={event => save_state_jpg = true}> Сохранить (jpg)</Button>
            </Button.Group>
        </div>
    )
}

export default UGVA_man
