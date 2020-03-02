var cnv;
function centerCanvas() {
 var x = (windowWidth - width) / 2;
 var y = (windowHeight-height) / 2;
 cnv.position(x,y);
}

function setup(){
    cnv = createCanvas(900,810);
    centerCanvas();
    background (102,0,51);
}

function draw(){
    fill(255,188,71);
    noStroke();
    rect(600,40,300,760.125);
    statement();
    hair1();
    hair2();
    hair3();
    hair4();
    hair5();
    hair6();
    hair7()
    hat();
    face();
    neck();
    shirt1();
    shirt2();
    nose1();
    nose2();
    nose3();
    nose4();
    lips1();
    lips2();
    lips3();
    righteyebrow();
    lefteyebrow();
    lefteye();
    leftpupil1();
    leftpupil2();
    righteye();
    rightpupil1();
    rightpupil2();
}

function mouseClicked(){
    var x = mouseX;
    var y = mouseY;
    var n = 'I SAID DONT TOUCH ME YOU DENSE CRAP TOWEL!'; 
    var p = 'Thank you for respecting my space.';
    if (x >= 200 && x <= 600){
        textSize(42);
        fill(51,0,102);
        strokeWeight(2);
        text(n,x,y,300,500);
    } else {
        textSize(42);
        fill(255,204,204);
        strokeWeight(2);
        text(p,x,y,300,300);
    }
    noLoop();
}

function statement(){
    textSize(70);
    fill(153,0,76);
    textStyle(BOLDITALIC);
    text('D',725,125);
    text('O',715,180);
    text('N',718,235);
    text('T',715,290);
    text('T',715,390);
    text('O',710,445);
    text('U',708,500);
    text('C',708,555);
    text('H',710,610);
    text('M',710,710);
    text('E',710,765);
}

function hair1(){
    stroke(229, 204, 255);
    beginShape(LINES);
    vertex(600, 225.51);
    vertex(600.3, 459.13);
    vertex(570.53, 491.51);
    endShape();
}

function hair2(){
    fill(229, 204, 255);
    noStroke();
    beginShape();
    vertex(600, 225.51);
    vertex(588.15, 201.77);
    vertex(574.36, 181.09);
    vertex(546.02, 167.3);
    vertex(528.4, 162.7);
    vertex(507.72, 152.74);
    vertex(487.81, 136.66);
    vertex(507.72, 136.66);
    vertex(526.87, 136.66);
    vertex(553.68, 142.02);
    vertex(576.66, 148.91);
    vertex(590.45, 157.34);
    vertex(600.3, 162.7);
    vertex(600, 225.51);
    endShape(CLOSE);
}

function hair3(){
    fill(229, 204, 255);
    noStroke();
    beginShape();
    vertex(600.3, 459.13);
    vertex(600.3, 800.24);
    vertex(519.98, 800.24);
    vertex(534.47, 767.04);
    vertex(539.89, 730.28);
    vertex(552.15, 687.38);
    vertex(543.72, 661.34);
    vertex(539.89, 621.51);
    vertex(539.89, 588.57);
    vertex(552.91, 551.04);
    vertex(564.4, 523.47);
    vertex(588.55, 491.51);
    vertex(600.3, 459.13);
    endShape(CLOSE);
}

function hair4(){
    fill(229, 204, 255);
    noStroke();
    beginShape();
    vertex(380.57,162.7);
    vertex(349.13,188.74);
    vertex(335.38,210.02);
    vertex(325.43,230.87);
    vertex(316.23,257.34);
    vertex(310.11,291.38);
    vertex(304.74,318.19);
    vertex(300,338.87);
    vertex(294.02,358.02);
    vertex(289.43,374.87);
    vertex(289.43,388.66);
    vertex(289.43,420.83);
    vertex(289.43,433.85);
    vertex(286.36,450.7);
    vertex(283.81,466.53);
    vertex(283.81,483.38);
    vertex(283.81,502.02);
    vertex(283.81,516.57);
    vertex(286.87,525.77);
    vertex(289.94,535.47);
    vertex(300.15,561);
    vertex(302.7,574.45);
    vertex(304.23,589.09);
    vertex(305.77,600.32);
    vertex(310.36,613.09);
    vertex(316.49,629.68);
    vertex(321.09,642.19);
    vertex(327.72,663.13);
    vertex(338.96,695.81);
    vertex(347.13,721.34);
    vertex(350.7,736.15);
    vertex(351.72,757.09);
    vertex(349.68,781.09);
    vertex(348.15,800);
    vertex(378.28,800);
    vertex(372.66,777.51);
    vertex(369.09,761.68);
    vertex(367.55,736.15);
    vertex(362.57,711.64);
    vertex(378.57,689.68);
    vertex(377.77,652.77);
    vertex(378.28,634.53);
    vertex(380.57,622.28);
    vertex(377.26,602.87);
    vertex(373.17,574.45);
    vertex(367.04,535.98);
    vertex(362.57,514.53);
    vertex(353.77,458.36);
    vertex(330.02,343.47);
    vertex(336.06,257.34);
    vertex(335.38,235.47);
    vertex(342.66,208.66);
    vertex(359.89,178.79);
    vertex(380.574,162.702);
    endShape(CLOSE);
}

function hair5(){
    fill(202, 173, 232);
    noStroke();
    beginShape();
    vertex(167.638,800.238);
    vertex(187.94,781.98);
    vertex(206.45,767.3);
    vertex(218.57,754.53);
    vertex(225.6,743.68);
    vertex(235.17,730.28);
    vertex(244.11,714.96);
    vertex(247.94,699);
    vertex(252.4,676.02);
    vertex(257.89,652.77);
    vertex(263.89,629.68);
    vertex(268.96,610.28);
    vertex(268.96,597.51);
    vertex(271.55,574.45);
    vertex(272.83,561.77);
    vertex(274.11,546.45);
    vertex(283.81,516.57);
    vertex(286.87,525.77);
    vertex(289.94,535.47);
    vertex(300.15,561);
    vertex(302.7,574.45);
    vertex(304.23,589.09);
    vertex(305.77,600.32);
    vertex(310.36,613.09);
    vertex(316.49,629.68);
    vertex(321.09,642.19);
    vertex(327.72,663.13);
    vertex(338.96,695.81);
    vertex(347.13,721.34);
    vertex(350.7,736.15);
    vertex(351.72,757.09);
    vertex(349.68,781.09);
    vertex(348.15,800);
    endShape(CLOSE);
}

function hair6(){
    fill(202, 173, 232);
    noStroke();
    beginShape();
    vertex(349.76,445.58);
    vertex(368.26,481.35);
    vertex(393.79,501.53);
    vertex(397.03,517.6);
    vertex(422.01,576.91);
    vertex(429.6,629.68);
    vertex(439.43,700.28);
    vertex(460,800);
    vertex(378,800.24);
    vertex(369.09,761.68);
    vertex(367.55,736.15);
    vertex(362.57,711.64);
    vertex(378.57,689.68);
    vertex(377.77,652.77);
    vertex(378.28,634.53);
    vertex(380.57,622.28);
    vertex(377.26,602.87);
    vertex(373.17,574.45);
    vertex(367.04,535.98);
    vertex(362.57,514.53);
    endShape(CLOSE);
}

function hair7(){
    fill(202, 173, 232);
    noStroke();
    beginShape();
    vertex(600,697.62);
    vertex(600.3,800.24);
    vertex(539.83,800);
    vertex(566.38,766.04);
    vertex(600,697.62);
    endShape(CLOSE);
}

function hat(){
    fill(35,45,130);
    noStroke();
    beginShape();
    vertex(600,32.77);
    vertex(557.23,33.47);
    vertex(507.55,36.31);
    vertex(458.26,41.89);
    vertex(422.01,48.09);
    vertex(357.14,61.93);
    vertex(332.82,75.75);
    vertex(302.69,89.43);
    vertex(282.08,101.63);
    vertex(257.89,119.57);
    vertex(237.43,139.87);
    vertex(218.1,166.81);
    vertex(207.94,187.41);
    vertex(201.88,231.91);
    vertex(203.38,256.35);
    vertex(208.4,286.04);
    vertex(231.68,318.39);
    vertex(248.36,334.92);
    vertex(266.6,347.15);
    vertex(294.02,358.02);
    vertex(300,338.87);
    vertex(304.74,318.19);
    vertex(310.11,291.38);
    vertex(316.23,257.34);
    vertex(335.38,210.02);
    vertex(349.13,188.74);
    vertex(380.57,162.7);
    vertex(401.26,151.21);
    vertex(415.05,145.85);
    vertex(433.43,140.49);
    vertex(447.98,136.66);
    vertex(463.45,136.66);
    vertex(487.81,136.66);
    vertex(526.87,136.66);
    vertex(553.68,142.02);
    vertex(600.3,162.7);
    endShape(CLOSE);
}

function face(){
    fill(255,219,172);
    noStroke();
    beginShape();
    vertex(600, 163.72);
    vertex(600.05, 459.38);
    vertex(586.62, 472.66);
    vertex(560.06, 493.09);
    vertex(529.43, 507.89);
    vertex(491.64, 518.62);
    vertex(464.88, 521.17);
    vertex(443.64,519.13);
    vertex(416.26,513.34);
    vertex(399.29,500.64);
    vertex(375.21,484.4);
    vertex(359.89,463.98);
    vertex(351.52,440.63);
    vertex(346.62,423.13);
    vertex(343.55,394.53);
    vertex(334.87,367.98);
    vertex(329.45,333.6);
    vertex(329.45,316.91);
    vertex(333.42,290.96);
    vertex(336.6,274.02);
    vertex(336.6,249.85);
    vertex(341.7,223.3);
    vertex(370.3,170.19);
    vertex(395.83,154.87);
    vertex(442.81,137.51);
    vertex(483.66,134.45);
    vertex(530.96,134.45);
    vertex(573.85,147.38);
    endShape(CLOSE);
}

function neck(){
    fill(240,201,163);
    noStroke();
    beginShape();
    vertex(600.05,459.38);
    vertex(586.62,472.66);
    vertex(560.06,493.09);
    vertex(529.43,507.89);
    vertex(491.64,518.62);
    vertex(464.88,521.17);
    vertex(443.64,519.13);
    vertex(416.26,513.34);
    vertex(392.82,496.82);
    vertex(397.03,517.6);
    vertex(425.27,583.24);
    vertex(464.75,610.53);
    vertex(488.57,619.21);
    vertex(497.77,624.83);
    vertex(504.4,642.7);
    vertex(506.96,654.45);
    vertex(503.89,660.57);
    vertex(506.96,685.6);
    vertex(513.09,672.83);
    vertex(524.32,670.79);
    vertex(542.7,653.43);
    vertex(538.62,626.87);
    vertex(542.7,596.74);
    vertex(549.85,562.02);
    vertex(564.15,525.77);
    vertex(581,494.11);
    vertex(600.05,459.38);
    endShape(CLOSE);
}

function shirt1(){
    fill(51, 51, 255);
    stroke(0,0,102);
    beginShape();
    vertex(428.05,574.4);
    vertex(423.63,579.43);
    vertex(458.75,800.24);
    vertex(519,800.24);
    vertex(538.11,753.51)
    vertex(552.91,694.79);
    vertex(542.7,653.43);
    vertex(524.32,670.79);
    vertex(513.09,672.83);
    vertex(506.96,685.6);
    vertex(503.89,660.57);
    vertex(506.96,654.45);
    vertex(504.4,642.7);
    vertex(497.77,624.83);
    vertex(488.57,619.21);
    vertex(464.75,610.53);
    vertex(428.05,574.4);
    endShape(CLOSE);
}

function shirt2(){
    stroke(0,0,102);
    fill(240,201,163);
    beginShape();
    vertex(506.96,685.6);
    vertex(514.62,741.77);
    vertex(512.32,800.24);
    endShape(CLOSE);
}

function nose1(){
    stroke(240,201,163);
    strokeWeight(2);
    line(477.47, 308.43,482.06, 315.77);
    line(482.06, 315.77,489.09, 327.81);
    line(489.09, 327.81,491.77, 335.49);
    line(489.09, 327.81,492.53, 340.79);
    line(492.53, 340.79,491.24, 345.76);
    line(492.53, 340.79,488.89,350.45);
    line(488.89,350.45,484.68,353.17);
    line(484.68,353.17,477.47,354.25);
}

function nose2(){
    fill(0);
    beginShape();
    noStroke();
    vertex(474.62,345.680);
    vertex(472.4,346.53);
    vertex(469.51,346.53);
    vertex(467.02,346.08);
    vertex(465.21,344.74);
    vertex(462.19,342.96);
    vertex(455.38,338.02);
    vertex(454.62,336.66);
    vertex(454.62,334.98);
    vertex(456.23,333.6);
    vertex(457.94,332.23);
    vertex(460.49,332.23);
    vertex(462.19,332.23);
    vertex(464.75,333.09);
    vertex(475.04,339.57);
    vertex(475.81,341.6);
    vertex(475.81,343.73);
    vertex(474.62,345.68);
    endShape(CLOSE);
}

function nose3(){
    fill(0);
    noStroke();
    beginShape();
    vertex(433.77,339.45);
    vertex(433.77,342.45);
    vertex(432.91,344.32);
    vertex(427.13,351.98);
    vertex(424.4,351.98);
    vertex(420.49,351.98);
    vertex(417.85,350.11);
    vertex(417.85,342.11);
    vertex(420.15,338.19);
    vertex(422.96,335.49);
    vertex(428.57,336.32);
    vertex(432.06,338.19);
    vertex(433.77,339.45);
    endShape(CLOSE);
}

function nose4(){
    stroke(240,201,163);
    strokeWeight(2);
    line(428.57,246.64,428.57,257.36);
    line(428.57,257.36,428.57,278.3);
    line(428.57,278.3,414.28,320.68);
    line(414.28,320.68,409.17,329.87);
    line(409.17,329.87,407.13,337.53);
    line(407.13,337.53,407.13,343.66);
    line(407.13,343.66,407.13,349.79);
    line(407.13,349.79,411.21,356.43);
    line(411.21,356.43,414.79,359.49);
    line(414.79,359.49,421.94,359.49);
}

function lips1(){
    fill(126,31,23);
    noStroke();
    beginShape();
    vertex(454.62,383.55);
    vertex(447.98,387.89);
    vertex(441.34,387.89);
    vertex(432.66,383.55);
    vertex(428.57,385.72);
    vertex(423.98,387.89);
    vertex(417.85,392.23);
    vertex(411.98,396.83);
    vertex(407.13,401.43);
    vertex(404.06,405.77);
    vertex(401.51,409.6);
    vertex(398.7,415.72);
    vertex(396.91,422.11);
    vertex(395.38,427.47);
    vertex(392.82,434.11);
    vertex(393.94,435.04);
    vertex(395.38,435.89);
    vertex(396.74,435.89);
    vertex(398.28,435.89);
    vertex(400.83,435);
    vertex(403.55,433.34);
    vertex(406.36,431.55);
    vertex(408.06,430.45);
    vertex(409.6,427.98);
    vertex(411.38,425.77);
    vertex(411.98,423.3);
    vertex(411.98,420.57);
    vertex(411.98,418.96);
    vertex(413.26,416.91);
    vertex(415.98,414.96);
    vertex(418.36,412.32);
    vertex(420.49,410.53);
    vertex(423.21,409.09);
    vertex(426.45,407.38);
    vertex(429.68,406.19);
    vertex(432.91,404.83);
    vertex(435.13,404.4);
    vertex(437.51,403.64);
    vertex(439.38,403.3);
    vertex(442.79,403.3);
    vertex(444.49,403.3);
    vertex(447.04,403.3);
    vertex(448.4,403.3);
    vertex(449.77,403.47);
    vertex(451.68,403.21);
    vertex(453.34,403.34);
    vertex(456.15,403.47);
    vertex(458.06,403.6);
    vertex(462.02,403.98);
    vertex(463.81,404.06);
    vertex(466.7,404.23);
    vertex(468.57,404.23);
    vertex(469.94,404.06);
    vertex(472.23,404.57);
    vertex(474.19,404.83);
    vertex(475.64,404.83);
    vertex(478.11,405.51);
    vertex(481.17,406.53);
    vertex(484.15,406.62);
    vertex(486.19,407.47);
    vertex(498.11,414.19);
    vertex(500.49,415.81);
    vertex(504.15,418.96);
    vertex(506.7,421.77);
    vertex(507.72,422.79);
    vertex(508.91,423.72);
    vertex(510.19,424.57);
    vertex(511.21,425.04);
    vertex(514.11,426.53);
    vertex(515.81,426.87);
    vertex(521.43,427.81);  
    vertex(523.64,427.98);
    vertex(528.66,427.72); 
    vertex(524.57,422.62);
    vertex(515.89,414.96);
    vertex(507.47,407.3);
    vertex(499.55,400.12);
    vertex(493.53,395.21);
    vertex(486.19,391.13);
    vertex(478.62,388.4);
    vertex(471.72,386.36);
    vertex(465.21,385.09);
    vertex(454.62,383.55);
    endShape();
}

function lips2(){
    fill(0);
    noStroke();
    beginShape();
    vertex(411.38,425.77);
    vertex(411.98,423.3);
    vertex(411.98,420.57);
    vertex(411.98,418.96);
    vertex(413.26,416.91);
    vertex(415.98,414.96);
    vertex(418.36,412.32);
    vertex(420.49,410.53);
    vertex(423.21,409.09);
    vertex(426.45,407.38);
    vertex(429.68,406.19);
    vertex(432.91,404.83);
    vertex(435.13,404.4);
    vertex(437.51,403.64);
    vertex(439.38,403.3);
    vertex(442.79,403.3);
    vertex(444.49,403.3);
    vertex(447.04,403.3);
    vertex(448.4,403.3);
    vertex(449.77,403.47);
    vertex(451.68,403.21);
    vertex(453.34,403.34);
    vertex(456.15,403.47);
    vertex(458.06,403.6);
    vertex(462.02,403.98);
    vertex(463.81,404.06);
    vertex(466.7,404.23);
    vertex(468.57,404.23);
    vertex(469.94,404.06);
    vertex(472.23,404.57);
    vertex(474.19,404.83);
    vertex(475.64,404.83);
    vertex(478.11,405.51);
    vertex(481.17,406.53);
    vertex(484.15,406.62);
    vertex(486.19,407.47);
    vertex(498.11,414.19);
    vertex(500.49,415.81);
    vertex(504.15,418.96);
    vertex(506.7,421.77);
    vertex(507.72,422.79);
    vertex(508.91,423.72);
    vertex(510.19,424.57);
    vertex(511.21,425.04);
    vertex(509.51,427.98);
    vertex(509.51,431.04);
    vertex(508.23,434.11);
    vertex(507.21,435.94);
    vertex(501.34,438.7);
    vertex(498.79,439.47);
    vertex(495.21,440.23);
    vertex(490.87,441);
    vertex(483.47,441);
    vertex(473.77,441.51);
    vertex(470.45,441);
    vertex(462.28,440.49);
    vertex(458.45,440.49);
    vertex(451.81,440.49);
    vertex(448.49,441);
    vertex(440.32,443.04);
    vertex(433.77,444.57);
    vertex(424.72,446.11);
    vertex(419.89,446.11);
    vertex(413.26,446.11);
    vertex(410.66,443.3);
    vertex(409.94,439.21);
    vertex(411.38,435.89);
    vertex(411.38,428.49);
    vertex(411.38,425.77);
    endShape(CLOSE);
}

function lips3(){
    fill(140,31,23);
    noStroke();
    beginShape();
    vertex(392.82, 434.10);
    vertex(392.82,441.76);
    vertex(392.82,446.36);
    vertex(393.85,453.25);
    vertex(396.91,457.08);
    vertex(399.46,459.38);
    vertex(403.04,462.7);
    vertex(409.1,464.23);
    vertex(416.83,464.87);
    vertex(424.617,465.766);
    vertex(430.872,466.532);               
    vertex(498.021,459.383); 
    vertex(509,455.298); 
    vertex(516.915,450.957); 
    vertex(523.043,445.851);  
    vertex(527.383,438.191); 
    vertex(528.66,427.723); 
    vertex(523.638,427.979); 
    vertex(521.426,427.809); 
    vertex(519.043,427.298); 
    vertex(517.511,427.043); 
    vertex(515.809,426.872); 
    vertex(514.106,426.532);
    vertex(512.574,425.851); 
    vertex(511.213,425.043);
    vertex(510.191,424.574);
    vertex(509.51,427.98);
    vertex(509.51,431.04);
    vertex(508.23,434.11);
    vertex(507.21,435.94);
    vertex(501.34,438.7);
    vertex(498.79,439.47);
    vertex(495.21,440.23);
    vertex(490.87,441);
    vertex(483.47,441);
    vertex(473.77,441.51);
    vertex(470.45,441);
    vertex(462.28,440.49);
    vertex(458.45,440.49);
    vertex(451.81,440.49);
    vertex(448.49,441);
    vertex(440.32,443.04);
    vertex(433.77,444.57);
    vertex(424.72,446.11);
    vertex(419.89,446.11);
    vertex(413.26,446.11);
    vertex(410.66,443.3);
    vertex(409.94,439.21);
    vertex(411.38,435.89);
    vertex(411.38,428.49);
    vertex(411.38,425.77);
    vertex(409.596,427.979); 
    vertex(408.064,430.447);
    vertex(406.362,431.553); 
    vertex(403.553,433.34); 
    vertex(400.83,435);
    vertex(398.277,435.894);
    vertex(395.383,435.894);
    vertex(392.822, 434.106); 
    endShape(CLOSE);
}

function righteyebrow(){
    beginShape();
    noStroke();
    fill(75,56,51);
    vertex(587.72,207.64);
    vertex(582.28,204.83);
    vertex(578.02,202.11);
    vertex(571.38,198.02);
    vertex(566.28,195.04);
    vertex(561.17,193.94);
    vertex(556.87,193.67);
    vertex(549.82,195.03);
    vertex(539.46,198.62);
    vertex(532.49,202.02);
    vertex(527.87,204.62);
    vertex(523.89,207.38);
    vertex(519.5,210.26);
    vertex(510.53,214.79);
    vertex(504.49,218.11);
    vertex(493.9,224.29);
    vertex(486.66,214.43);
    vertex(510.45,199.72);
    vertex(521.68,193.26);
    vertex(528.15,189.09);
    vertex(531.56,186.49);
    vertex(539.13,183.55);
    vertex(548.83,181.6);
    vertex(557.51,182.36);
    vertex(566.19,185.04);
    vertex(574.33,189.72);
    vertex(579.21,193.77);
    vertex(582.28,197);
    vertex(584.66,200.15);
    vertex(586.28,203.75);
    endShape(CLOSE);
}

function lefteyebrow(){
    beginShape();
    noStroke();
    fill(75,56,51);
    vertex(421.64,223.98);
    vertex(412.64,237.84);
    vertex(399.6,236.36);
    vertex(390.66,234.19);
    vertex(381.09,232.02);
    vertex(373.3,229.98);
    vertex(364.87,229.72);
    vertex(357.32,230.18);
    vertex(350.58,233.94);
    vertex(344.96,238.28);
    vertex(337.81,243.55);
    vertex(340.49,232.66);
    vertex(344.57,227.04);
    vertex(350.96,222.19);
    vertex(360.4,216.32);
    vertex(368.7,214.79);
    vertex(375.66,214.53);
    vertex(386.96,217.47);
    vertex(400.49,220.66);
    vertex(412.64,223.98);
    endShape(CLOSE);
}

function lefteye(){
    beginShape();
    strokeWeight(1);
    stroke(0);
    fill(255);
    vertex(414.96,273.36);
    vertex(413.49,274.38);
    vertex(411.47,274.38);
    vertex(407.13,274.87);
    vertex(403.98,274.87);
    vertex(399.55,274.87);
    vertex(396.51,275.34);
    vertex(392.81,276.3);
    vertex(389.34,277.09);
    vertex(384.74,278.11);
    vertex(379.98,278.85);
    vertex(376.73,279.13);
    vertex(369.77,279.13);
    vertex(363.32,278.47);
    vertex(358.66,276.53);
    vertex(356.66,273.68);
    vertex(356.36,270.55);
    vertex(356.6,267.55);
    vertex(357.51,263.64);
    vertex(359.89,259.38);
    vertex(364.32,254.62);
    vertex(368.74,251.04);
    vertex(373.85,248.49);
    vertex(377.94,246.64);
    vertex(381.68,245.94);
    vertex(385.98,245.89);
    vertex(389,245.94);
    vertex(393.43,246.64);
    vertex(396.66,247.64);
    vertex(400.06,249.68);
    vertex(403.3,252.06);
    vertex(405.72,254.94);
    vertex(407.57,257.81);
    vertex(409.36,260.43);
    vertex(411.47,262.79);
    vertex(412.64,264.66);
    vertex(414.02,266.7);
    vertex(414.89,268.38);
    vertex(415.21,269.94);
    vertex(415.21,271.64);
    endShape();
}

function righteye(){
    beginShape();
    strokeWeight(1);
    stroke(0);
    fill(255);
    vertex(567.21,243.38);
    vertex(567.21,245.3);
    vertex(566.57,247.6);
    vertex(565.3,249.38);
    vertex(562.87,251.04);
    vertex(559.17,253.34);
    vertex(554.83,255.51);
    vertex(548.45,258.57);
    vertex(544.53,260.15);
    vertex(541.56,260.86); 
    vertex(537.73,261.53);
    vertex(533.51,261.89);
    vertex(530.37,261.89);
    vertex(526.49,261.89);
    vertex(523.04,261.89);
    vertex(519.85,261.89);
    vertex(516.4,261.89);
    vertex(512.7,261.89);
    vertex(503.51,261.89);
    vertex(500.06,261.89); 
    vertex(497.13,261.89);
    vertex(494.32,261.38);
    vertex(493.53,259.98);
    vertex(493.53,257.3);
    vertex(494.06,256.02); 
    vertex(495.09,254.62);
    vertex(496.62,253.09);
    vertex(497.89,251.94);
    vertex(499.17,250.66);
    vertex(501.47,248.11); 
    vertex(503.51,245.55);
    vertex(505.55,243.38);
    vertex(508.62,239.43);
    vertex(511.55,236.62);
    vertex(515.64,232.79); 
    vertex(520.62,229.85);
    vertex(524.32,228.19);
    vertex(527.51,227.17);
    vertex(530.37,226.4);
    vertex(533.51,225.77); 
    vertex(536.06,225.38);
    vertex(539.77,225.13);
    vertex(543.98,225.77);
    vertex(546.53,226.79);
    vertex(548.32,227.81); 
    vertex(551.26,229.21);
    vertex(554.57,231.26);
    vertex(558.66,234.19);
    vertex(561.6,236.87);
    vertex(563.51,238.91);
    vertex(565.81,241.6);
    endShape();
}

function leftpupil1(){
    strokeWeight(2);
    stroke(0);
    fill(58,36,31);
    circle(388,262.58,26.13);
}

function rightpupil1(){
    strokeWeight(2);
    stroke(0);
    fill(58,36,31);
    circle(538.8,243.15,26.13);
}

function rightpupil2(){
    noStroke();
    fill(0);
    circle(539.19,242.38,11.48);
}

function leftpupil2(){
    noStroke();
    fill(0);
    circle(389.29,261.89,11.48);
}

function windowResized(){
    centerCanvas();
}

