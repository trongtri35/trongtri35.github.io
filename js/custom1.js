(function ($) {
	$(document).ready(function () {

		$('#submit').on('click', function () {

			//GET ALL INPUT VALUES
			var day1 = $('#day1').val();
			var day2 = $('#day2').val();
			var month1 = $('#month1').val();
			var month2 = $('#month2').val();
			var year1 = $('#year1').val();
			var year2 = $('#year2').val();
			var year3 = $('#year3').val();
			var year4 = $('#year4').val();
			var name = $('#fullname').val();
			//TINH SO CHU DAO
			var num1 = parseInt(day1) + parseInt(day2) + parseInt(month1) + parseInt(month2) + parseInt(year1) + parseInt(year2) + parseInt(year3) + parseInt(year4);
			var sochudao = Calculate22(num1);
			$('#sochudao').text('Con số chủ đạo: ' + sochudao);
			// TINH SO NGAY SINH
			var dayb = 0;
			var ns = '';
			ns += day1;
			ns += day2;
			ns1 = parseInt(ns);
			var ngaysinh = parseInt(day1) + parseInt(day2);
			if (ns1 == 22) {
				dayb = 22;
			} else {
				dayb = Calculate(ngaysinh);
			}
			$('#dayb').text('Con số ngày sinh: ' + dayb);
			// TINH NAM CA NHAN
			var currentyear = PY(parseInt(new Date().getFullYear()));
			var yp1 = currentyear + parseInt(day1) + parseInt(day2) + parseInt(month1) + parseInt(month2);
			var yp = PY(yp1)
			$('#yp').text('Con số năm cá nhân: ' + yp);
			// TINH CON SO CUA TEN
			var str = name.charAt(0);
			var str1 = name.toString();
			var ueoai = [];
			var phuam = [];
			obj = {
				'u': 3,
				'e': 5,
				'o': 6,
				'a': 1,
				'i': 9,
				'y': 7
			};
			obj2 = {
				'j': 1,
				's': 1,
				'b': 2,
				'k': 2,
				't': 2,
				'c': 3,
				'l': 3,
				'd': 4,
				'm': 4,
				'v': 4,
				'n': 5,
				'w': 5,
				'f': 6,
				'x': 6,
				'g': 7,
				'p': 7,
				'h': 8,
				'q': 8,
				'z': 8,
				'r': 9
			};
			for (i = 0, len = str1.length; i < len; i += 1) {
				if (Object.keys(obj).some(function (k) {
						return ~k.indexOf(name.charAt(i))
					})) {
					// it has property
					var abc = name.charAt(i);
					ueoai.push(+obj[abc])
				} else if (Object.keys(obj2).some(function (j) {
						return ~j.indexOf(name.charAt(i))
					})) {
					// it has property
					var abc2 = name.charAt(i);
					phuam.push(+obj2[abc2])
				} else {
					ueoai = [];
					phuam = [];
				}
			}
			for (var i1 = 0, sum = 0; i1 < ueoai.length; sum += ueoai[i1++]);
			var numbTen = Calculate(sum);
			for (var i2 = 0, sum2 = 0; i2 < phuam.length; sum2 += phuam[i2++]);
			var phuamTen = Calculate22(sum2);
			$('#fname').html('Chỉ số tâm hồn của tên: ' + numbTen + '. Chỉ số thể hiện của tên: ' + phuamTen + '. Con số tổng của tên: ' + Calculate(numbTen + phuamTen))
			// DIEN SO VAO BIEU DO
			tbten_1 = '';
			tbten_2 = '';
			tbten_3 = '';
			tbten_4 = '';
			tbten_5 = '';
			tbten_6 = '';
			tbten_7 = '';
			tbten_8 = '';
			tbten_9 = '';
			tbs_1 = '';
			tbs_2 = '';
			tbs_3 = '';
			tbs_4 = '';
			tbs_5 = '';
			tbs_6 = '';
			tbs_7 = '';
			tbs_8 = '';
			tbs_9 = '';
			dienso(ueoai);
			dienso(phuam);
			$('.hide').css({
				"display": "initial"
			});
			$('#tbten_1').html(tbten_1);
			$('#tbten_2').html(tbten_2);
			$('#tbten_3').html(tbten_3);
			$('#tbten_4').html(tbten_4);
			$('#tbten_5').html(tbten_5);
			$('#tbten_6').html(tbten_6);
			$('#tbten_7').html(tbten_7);
			$('#tbten_8').html(tbten_8);
			$('#tbten_9').html(tbten_9);
			diensoNS(day1);
			diensoNS(day2);
			diensoNS(month1);
			diensoNS(month2);
			diensoNS(year1);
			diensoNS(year2);
			diensoNS(year3);
			diensoNS(year4);
			$('#tbs_1').html(tbs_1);
			$('#tbs_2').html(tbs_2);
			$('#tbs_3').html(tbs_3);
			$('#tbs_4').html(tbs_4);
			$('#tbs_5').html(tbs_5);
			$('#tbs_6').html(tbs_6);
			$('#tbs_7').html(tbs_7);
			$('#tbs_8').html(tbs_8);
			$('#tbs_9').html(tbs_9);
			// TABLE NAME + BIRDTHDAY
			$('#tbgop_1').html(tbs_1 + tbten_1);
			$('#tbgop_2').html(tbs_2 + tbten_2);
			$('#tbgop_3').html(tbs_3 + tbten_3);
			$('#tbgop_4').html(tbs_4 + tbten_4);
			$('#tbgop_5').html(tbs_5 + tbten_5);
			$('#tbgop_6').html(tbs_6 + tbten_6);
			$('#tbgop_7').html(tbs_7 + tbten_7);
			$('#tbgop_8').html(tbs_8 + tbten_8);
			$('#tbgop_9').html(tbs_9 + tbten_9);
			// 4 COT MOC CUOC DOI - CHART
			var birthyear1 = '';
			birthyear1 += year1;
			birthyear1 += year2;
			birthyear1 += year3;
			birthyear1 += year4;
			var birthyear = parseInt(birthyear1);
			var sumBirthyear = PY(birthyear);
			var curyear = parseInt(new Date().getFullYear());
			var curYearsold = parseInt(curyear) - birthyear;
			var tuoicmoc1 = 36 - sochudao;
			var tuoicmoc2 = tuoicmoc1 + 9;
			var tuoicmoc3 = tuoicmoc2 + 9;
			var tuoicmoc4 = tuoicmoc3 + 9;
			var cmns = PY(ngaysinh);
			var cmts = PY(parseInt(month1) + parseInt(month2));
			var cmoc1 = PY(cmns + cmts);
			var cmoc2 = PY(cmns + sumBirthyear);
			var cmoc3 = Calculate(cmoc1 + cmoc2);
			var cmoc4 = Calculate(cmts + sumBirthyear);
			var ctx = document.getElementById('myChart');
			let myChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: [tuoicmoc1 + birthyear + '. ' + tuoicmoc1 + ' tuổi. Số: ' + cmoc1, tuoicmoc2 + birthyear + '. ' + tuoicmoc2 + ' tuổi. Số: ' + cmoc2, tuoicmoc3 + birthyear + '. ' + tuoicmoc3 + ' tuổi. Số: ' + cmoc3, tuoicmoc4 + birthyear + '. ' + tuoicmoc4 + ' tuổi. Số: ' + cmoc4],
					datasets: [{
						label: '4 CỘT MỐC CUỘC ĐỜI CẦN CHÚ Ý',
						data: [tuoicmoc1, tuoicmoc2, tuoicmoc3, tuoicmoc4],
						backgroundColor: [
							'rgba(51, 255, 51, 0.2)',
							'rgba(21, 101, 192, 0.2)',
							'rgba(255, 0, 0, 0.2)',
							'rgba(255, 238, 88, 0.2)'
						],
						borderColor: [
							'rgba(51, 255, 51, 1)',
							'rgba(21, 101, 192, 1)',
							'rgba(255, 0, 0, 1)',
							'rgba(255, 238, 88, 1)'
						],
						borderWidth: 1
					}]
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true
							}
						}]
					}
				}
			});
			// BIỂU ĐỒ CHU KỲ 9 NĂM
			var ctx2 = document.getElementById('chuky9nam');
			let chuky9nam = new Chart(ctx2, {
				type: 'line',
				data: {
					labels: [9, 'Giao 9-1: 1/10 năm 9', 1, 'Giao 1-2: 1/11 năm 1', 2, 'Giao 2-3: 1/9 năm 2', 3, 'Giao 3-4: 1/10 năm 3', 4, 'Giao 4-5: 1/11 năm 4', 5, 'Giao 5-6: 1/9 năm 5', 6, 'Giao 6-7: 1/10 năm 6', 7, 'Giao 7-8: 1/8 năm 7', 8, 'Giao 8-9: 1/9 năm 8', 9],
					datasets: [{
							label: 'CHU KỲ 9 NĂM',
							data: [9, 10, 9, 7.8, 6.5, 5, 3.7, 2, 0.5, 2, 3.5, 4.8, 6, 4, 2.5, 3.5, 5, 7, 9],
							borderColor: ['rgba(21, 101, 192, 1)'],
							backgroundColor: ['rgba(21, 101, 192, 0.5)'],
							fill: false
						},
						{
							label: 'CỘT MỐC GIAO THOA',
							data: [0, 10, 0, 7.8, 0, 5, 0, 2, 0, 2, 0, 4.8, 0, 4, 0, 3.5, 0, 7, 0],
							borderColor: ['rgba(255, 0, 0, 1)'],
							backgroundColor: ['rgba(255, 0, 0, 0.5)'],
							type: 'bar'
						}
					]
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true,
								display: false
							}
						}]
					}
				}
			});
			// CHU KỲ CÁC NĂM THAY ĐỔI
			var arrlable = [];
			var arrCperson = [];
			var arr9person = [];
			var arrCworld = [];
			var arr9world = [];
			for (i4 = curyear; i4 < curyear + tuoicmoc4 + 6; i4 += 1) {
				arrlable.push(+i4);

			}
			makeArrayCK(yp, arrCperson);
			drawCircle9(arrCperson, arr9person);
			makeArrayCK(currentyear, arrCworld);
			drawCircle9(arrCworld, arr9world);
			var ctx3 = document.getElementById('chuky');
			let chuky = new Chart(ctx3, {
				type: 'line',
				data: {
					labels: arrlable,
					datasets: [{
							label: 'CHU KỲ 9 NĂM CÁ NHÂN',
							data: arr9person,
							borderColor: ['rgba(21, 101, 192, 1)'],
							backgroundColor: ['rgba(21, 101, 192, 0.5)'],
							fill: false
						},
						{
							label: 'CHU KỲ 9 NĂM NHÂN LOẠI',
							data: arr9world,
							borderColor: ['rgba(255, 0, 0, 1)'],
							backgroundColor: ['rgba(255, 0, 0, 0.5)'],
							fill: false
						}
					]
				},
				options: {
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true,
								display: false
							}
						}]
					}
				}
			});
			if (JSON.stringify(arr9person) == JSON.stringify(arr9world)) {
				$('#tl_chuky').html('CHÚ Ý QUAN SÁT BIỂU ĐỒ: Chu kỳ cuộc đời của bạn trùng với chu kỳ của nhân loại. Lên cùng lên, xuống cùng xuống.')
			} else {
				$('#tl_chuky').html('CHÚ Ý QUAN SÁT BIỂU ĐỒ: Chu kỳ cuộc đời của bạn lệch pha với chu kỳ của nhân loại. Căn cứ điều này để biết tận dụng các thời cơ riêng của cá nhân, đừng theo số đông (tham khảo thôi nhé).')
			}
			// LUẬN GIẢI CHỈ SỐ CƠ BẢN
			$.getJSON('data/lg_scd.json', function (jd) {
				$('#tl_sochudao').html(jd[sochudao].split('\n').join('<br />'));
				$('#tl_dayb').html(jd.ns[dayb].split('\n').join('<br />'));
				if (yp == 1 || yp == 9) {
					$('#tl_yp').html(jd.py[19].split('\n').join('<br />'));
				} else if (yp == 4 || yp == 7) {
					$('#tl_yp').html(jd.py[47].split('\n').join('<br />'));
				} else {
					$('#tl_yp').html(jd.py[23456].split('\n').join('<br />'));
				}
				$('#tl_name_na').html(jd.ten.na[numbTen].split('\n').join('<br />'));
				$('#tl_name_pa').html(jd.ten.pa[phuamTen].split('\n').join('<br />'));
				var sumName = Calculate(numbTen + phuamTen);
				var sumNameStr = sumName.toString();
				if (sumName == sochudao) {
					$('#tl_name_sum').html('Tên của bạn càng làm cho tính cách của sổ chủ đạo mạnh hơn');
				} else if ('147'.indexOf(sumNameStr) != -1 && '147'.indexOf(sochudao.toString()) != -1) {
					$('#tl_name_sum').html('Tên của bạn giúp cho bạn hoạt động chủ yếu nhiều về mặt thể chất');
				} else if ('258'.indexOf(sumNameStr) != -1 && '258'.indexOf(sochudao.toString()) != -1) {
					$('#tl_name_sum').html('Tên của bạn giúp cho bạn hoạt động chủ yếu nhiều về mặt tinh thần, tâm hồn.');
				} else if ('369'.indexOf(sumNameStr) != -1 && '369'.indexOf(sochudao.toString()) != -1) {
					$('#tl_name_sum').html('Tên của bạn giúp cho bạn hoạt động chủ yếu nhiều về mặt trí não');
				} else if ('147'.indexOf(sumNameStr) != -1 && '258'.indexOf(sochudao.toString()) != -1 || '258'.indexOf(sumNameStr) != -1 && '147'.indexOf(sochudao.toString()) != -1) {
					$('#tl_name_sum').html('Tên của bạn giúp cho bạn hoạt động ở hai mặt thể chất và tinh thần');
				} else if ('147'.indexOf(sumNameStr) != -1 && '369'.indexOf(sochudao.toString()) != -1 || '369'.indexOf(sumNameStr) != -1 && '147'.indexOf(sochudao.toString()) != -1) {
					$('#tl_name_sum').html('Tên của bạn giúp cho bạn hoạt động ở hai mặt thể chất và trí não');
				} else if ('256'.indexOf(sumNameStr) != -1 && '369'.indexOf(sochudao.toString()) != -1 || '369'.indexOf(sumNameStr) != -1 && '256'.indexOf(sochudao.toString()) != -1) {
					$('#tl_name_sum').html('Tên của bạn giúp cho bạn hoạt động ở hai mặt trí não và tinh thần');
				}
				// LUẬN GIẢI BIỂU ĐỒ_MŨI TÊN
				var tl_tbl = 'Phân tích biểu đồ tên:<br />';
				if (tbs_1 + tbs_4 + tbs_7 + tbten_1 + tbten_4 + tbten_7 == 0) {
					$('#tl_tbl').html(tl_tbl += jd.muiten._147.split('\n').join('<br />') + '<br />');
				}
				if (tbs_2 + tbs_5 + tbs_8 + tbten_2 + tbten_5 + tbten_8 == 0) {
					$('#tl_tbl').html(tl_tbl += jd.muiten._258.split('\n').join('<br />') + '<br>')
				}
				if (tbs_3 + tbs_6 + tbs_9 + tbten_3 + tbten_6 + tbten_9 == 0) {
					$('#tl_tbl').html(tl_tbl += jd.muiten._369.split('\n').join('<br />') + '<br>')
				}
				if (tbs_4 + tbs_5 + tbs_6 + tbten_4 + tbten_5 + tbten_6 == 0) {
					$('#tl_tbl').html(tl_tbl += jd.muiten._456.split('\n').join('<br />') + '<br>')
				}
				if (tbs_7 + tbs_8 + tbs_9 + tbten_7 + tbten_8 + tbten_9 == 0) {
					$('#tl_tbl').html(tl_tbl += jd.muiten._789.split('\n').join('<br />') + '<br>')
				}
				if (tbs_1 + tbs_5 + tbs_9 + tbten_1 + tbten_5 + tbten_9 == 0) {
					$('#tl_tbl').html(tl_tbl += jd.muiten._159.split('\n').join('<br />') + '<br>')
				}
				if (tbs_3 + tbs_5 + tbs_7 + tbten_3 + tbten_5 + tbten_7 == 0) {
					$('#tl_tbl').html(tl_tbl += jd.muiten._357.split('\n').join('<br />') + '<br>')
				}
				if (tbs_1 + tbten_1 != 0 && tbs_4 + tbten_4 != 0 && tbs_7 + tbten_7 != 0) {
					$('#tl_tbl').html(tl_tbl += jd.muiten[147].split('\n').join('<br />') + '<br>');
				}
				if (tbs_1 + tbten_1 != 0 && tbs_2 + tbten_2 != 0 && tbs_3 + tbten_3 != 0) {
					$('#tl_tbl').html(tl_tbl += jd.muiten[123].split('\n').join('<br />') + '<br>')
				}
				if (tbs_1 + tbten_1 != 0 && tbs_5 + tbten_5 != 0 && tbs_9 + tbten_9 != 0) {
					$('#tl_tbl').html(tl_tbl += jd.muiten[159].split('\n').join('<br />') + '<br>')
				}
				if (tbs_2 + tbten_2 != 0 && tbs_5 + tbten_5 != 0 && tbs_8 + tbten_8 != 0) {
					$('#tl_tbl').html(tl_tbl += jd.muiten[258].split('\n').join('<br />') + '<br>')
				}
				if (tbs_3 + tbten_3 != 0 && tbs_5 + tbten_5 != 0 && tbs_7 + tbten_7 != 0) {
					$('#tl_tbl').html(tl_tbl += jd.muiten[357].split('\n').join('<br />') + '<br>')
				}
				if (tbs_3 + tbten_3 != 0 && tbs_6 + tbten_6 != 0 && tbs_9 + tbten_9 != 0) {
					$('#tl_tbl').html(tl_tbl += jd.muiten[369].split('\n').join('<br />') + '<br>')
				}
				if (tbs_4 + tbten_4 != 0 && tbs_5 + tbten_5 != 0 && tbs_6 + tbten_6 != 0) {
					$('#tl_tbl').html(tl_tbl += jd.muiten[456].split('\n').join('<br />') + '<br>')
				}
				if (tbs_7 + tbten_7 != 0 && tbs_8 + tbten_8 != 0 && tbs_9 + tbten_9 != 0) {
					$('#tl_tbl').html(tl_tbl += jd.muiten[789].split('\n').join('<br />') + '<br>')
				}
				// LUẬN GIẢI BIỂU ĐỒ_SỐ TRONG Ô VUÔNG
				var tl_so = 'Ý nghĩa những con số trong sơ đồ:<br>'
				if (tbs_1 + tbten_1 == 0) {
					$('#tl_so').html(tl_so += jd.so[1][0].split('\n').join('<br />') + '<br>')
				} else if ((tbs_1 + tbten_1) == 1) {
					$('#tl_so').html(tl_so += jd.so[1][1].split('\n').join('<br />') + '<br>')
				} else if ((tbs_1 + tbten_1) == 11) {
					$('#tl_so').html(tl_so += jd.so[1][11].split('\n').join('<br />') + '<br>')
				} else if ((tbs_1 + tbten_1) == 111) {
					$('#tl_so').html(tl_so += jd.so[1][111].split('\n').join('<br />') + '<br>')
				} else if ((tbs_1 + tbten_1) == 1111) {
					$('#tl_so').html(tl_so += jd.so[1][1111].split('\n').join('<br />') + '<br>')
				} else if ((tbs_1 + tbten_1) >= 11111) {
					$('#tl_so').html(tl_so += jd.so[1][11111].split('\n').join('<br />') + '<br>')
				}
				if ((tbs_1 + tbten_1) != 0 && (tbs_4 + tbs_4) == 0 && (tbs_5 + tbten_5) == 0 && (tbs_2 + tbten_2) == 0) {
					$('#tl_so').html(tl_so += jd.so[1].od1.split('\n').join('<br />') + '<br>')
				}
				// so 2
				if (tbs_2 + tbten_2 == 0) {
					$('#tl_so').html(tl_so += jd.so[2][0].split('\n').join('<br />') + '<br>')
				} else if ((tbs_2 + tbten_2) == 2) {
					$('#tl_so').html(tl_so += jd.so[2][2].split('\n').join('<br />') + '<br>')
				} else if ((tbs_2 + tbten_2) == 22) {
					$('#tl_so').html(tl_so += jd.so[2][22].split('\n').join('<br />') + '<br>')
				} else if ((tbs_2 + tbten_2) == 222) {
					$('#tl_so').html(tl_so += jd.so[2][222].split('\n').join('<br />') + '<br>')
				} else if ((tbs_2 + tbten_2) == 2222) {
					$('#tl_so').html(tl_so += jd.so[2][2222].split('\n').join('<br />') + '<br>')
				} else if ((tbs_2 + tbten_2) >= 22222) {
					$('#tl_so').html(tl_so += jd.so[2][22222].split('\n').join('<br />') + '<br>')
				}
				// so 3
				if (tbs_3 + tbten_3 == 0) {
					$('#tl_so').html(tl_so += jd.so[3][0].split('\n').join('<br />') + '<br>')
				} else if ((tbs_3 + tbten_3) == 3) {
					$('#tl_so').html(tl_so += jd.so[3][3].split('\n').join('<br />') + '<br>')
				} else if ((tbs_3 + tbten_3) == 33) {
					$('#tl_so').html(tl_so += jd.so[3][33].split('\n').join('<br />') + '<br>')
				} else if ((tbs_3 + tbten_3) == 333) {
					$('#tl_so').html(tl_so += jd.so[3][333].split('\n').join('<br />') + '<br>')
				} else if ((tbs_3 + tbten_3) >= 3333) {
					$('#tl_so').html(tl_so += jd.so[3][3333].split('\n').join('<br />') + '<br>')
				}
				if ((tbs_3 + tbten_3) != 0 && (tbs_6 + tbs_6) == 0 && (tbs_5 + tbten_5) == 0 && (tbs_2 + tbten_2) == 0) {
					$('#tl_so').html(tl_so += jd.so[1].od1.split('\n').join('<br />') + '<br>')
				}
				// so 4
				if (tbs_4 + tbten_4 == 0) {
					$('#tl_so').html(tl_so += jd.so[4][0].split('\n').join('<br />') + '<br>')
				} else if ((tbs_4 + tbten_4) == 4) {
					$('#tl_so').html(tl_so += jd.so[4][4].split('\n').join('<br />') + '<br>')
				} else if ((tbs_4 + tbten_4) == 44) {
					$('#tl_so').html(tl_so += jd.so[4][44].split('\n').join('<br />') + '<br>')
				} else if ((tbs_4 + tbten_4) == 444) {
					$('#tl_so').html(tl_so += jd.so[4][444].split('\n').join('<br />') + '<br>')
				} else if ((tbs_4 + tbten_4) >= 4444) {
					$('#tl_so').html(tl_so += jd.so[4][4444].split('\n').join('<br />') + '<br>')
				}
				// so 5
				if (tbs_5 + tbten_5 == 0) {
					$('#tl_so').html(tl_so += jd.so[5][0].split('\n').join('<br />') + '<br>')
				} else if ((tbs_5 + tbten_5) == 5) {
					$('#tl_so').html(tl_so += jd.so[5][5].split('\n').join('<br />') + '<br>')
				} else if ((tbs_5 + tbten_5) == 55) {
					$('#tl_so').html(tl_so += jd.so[5][55].split('\n').join('<br />') + '<br>')
				} else if ((tbs_5 + tbten_5) == 555) {
					$('#tl_so').html(tl_so += jd.so[5][555].split('\n').join('<br />') + '<br>')
				} else if ((tbs_5 + tbten_5) >= 5555) {
					$('#tl_so').html(tl_so += jd.so[5][5555].split('\n').join('<br />') + '<br>')
				}
				// so 6
				if (tbs_6 + tbten_6 == 0) {
					$('#tl_so').html(tl_so += jd.so[6][0].split('\n').join('<br />') + '<br>')
				} else if ((tbs_6 + tbten_6) == 6) {
					$('#tl_so').html(tl_so += jd.so[6][6].split('\n').join('<br />') + '<br>')
				} else if ((tbs_6 + tbten_6) == 66) {
					$('#tl_so').html(tl_so += jd.so[6][66].split('\n').join('<br />') + '<br>')
				} else if ((tbs_6 + tbten_6) == 666) {
					$('#tl_so').html(tl_so += jd.so[6][666].split('\n').join('<br />') + '<br>')
				} else if ((tbs_6 + tbten_6) >= 6666) {
					$('#tl_so').html(tl_so += jd.so[6][6666].split('\n').join('<br />') + '<br>')
				}
				// so 7
				if (tbs_7 + tbten_7 == 0) {
					$('#tl_so').html(tl_so += jd.so[7][0].split('\n').join('<br />') + '<br>')
				} else if ((tbs_7 + tbten_7) == 7) {
					$('#tl_so').html(tl_so += jd.so[7][7].split('\n').join('<br />') + '<br>')
				} else if ((tbs_7 + tbten_7) == 77) {
					$('#tl_so').html(tl_so += jd.so[7][77].split('\n').join('<br />') + '<br>')
				} else if ((tbs_7 + tbten_7) == 777) {
					$('#tl_so').html(tl_so += jd.so[7][777].split('\n').join('<br />') + '<br>')
				} else if ((tbs_7 + tbten_7) >= 7777) {
					$('#tl_so').html(tl_so += jd.so[7][7777].split('\n').join('<br />') + '<br>')
				}
				if ((tbs_7 + tbten_7) != 0 && (tbs_4 + tbs_4) == 0 && (tbs_5 + tbten_5) == 0 && (tbs_8 + tbten_8) == 0) {
					$('#tl_so').html(tl_so += jd.so[7].od7.split('\n').join('<br />') + '<br>')
				}
				// so 8
				if (tbs_8 + tbten_8 == 0) {
					$('#tl_so').html(tl_so += jd.so[8][0].split('\n').join('<br />') + '<br>')
				} else if ((tbs_8 + tbten_8) == 8) {
					$('#tl_so').html(tl_so += jd.so[8][8].split('\n').join('<br />') + '<br>')
				} else if ((tbs_8 + tbten_8) == 88) {
					$('#tl_so').html(tl_so += jd.so[8][88].split('\n').join('<br />') + '<br>')
				} else if ((tbs_8 + tbten_8) == 888) {
					$('#tl_so').html(tl_so += jd.so[8][888].split('\n').join('<br />') + '<br>')
				} else if ((tbs_8 + tbten_8) >= 8888) {
					$('#tl_so').html(tl_so += jd.so[8][8888].split('\n').join('<br />') + '<br>')
				}
				// so 9
				if (tbs_9 + tbten_9 == 0) {
					$('#tl_so').html(tl_so += jd.so[9][0].split('\n').join('<br />') + '<br>')
				} else if ((tbs_9 + tbten_9) == 9) {
					$('#tl_so').html(tl_so += jd.so[9][9].split('\n').join('<br />') + '<br>')
				} else if ((tbs_9 + tbten_9) == 99) {
					$('#tl_so').html(tl_so += jd.so[9][99].split('\n').join('<br />') + '<br>')
				} else if ((tbs_9 + tbten_9) == 999) {
					$('#tl_so').html(tl_so += jd.so[9][999].split('\n').join('<br />') + '<br>')
				} else if ((tbs_9 + tbten_9) == 9999) {
					$('#tl_so').html(tl_so += jd.so[9][9999].split('\n').join('<br />') + '<br>')
				} else if ((tbs_9 + tbten_9) >= 99999) {
					$('#tl_so').html(tl_so += jd.so[9][99999].split('\n').join('<br />') + '<br>')
				}
				if ((tbs_9 + tbten_9) != 0 && (tbs_6 + tbs_6) == 0 && (tbs_5 + tbten_5) == 0 && (tbs_8 + tbten_8) == 0) {
					$('#tl_so').html(tl_so += jd.so[9].od9.split('\n').join('<br />') + '<br>')
				}
				// GỢI Ý ĐỔI TÊN
				var tl_doiten = 'Nếu sơ đồ tổng có quá nhiều số trong một ô, hoặc nhiều ô không có số. Bạn nên đổi tên thường gọi của mình như sau:<br>';
				doiten(tbs_1, 1);
				doiten(tbs_2, 2);
				doiten(tbs_3, 3);
				doiten(tbs_4, 4);
				doiten(tbs_5, 5);
				doiten(tbs_6, 6);
				doiten(tbs_7, 7);
				doiten(tbs_8, 8);
				doiten(tbs_9, 9);
				// LUẬN GIẢI 4 CỘT MỐC CUỘC ĐỜI
				var tl_cmoc = 'Ý NGHĨA CÁC CỘT MỐC :<br>';
				cotmoc(cmoc1, 'CỘT MỐC 1:<br>');
				cotmoc(cmoc2, 'CỘT MỐC 2:<br>');
				cotmoc(cmoc3, 'CỘT MỐC 3:<br>');
				cotmoc(cmoc4, 'CỘT MỐC 4:<br>');

				function doiten(tb, so) {
					if (tb == 0 && so == 1 || tb == 0 && so == 2) {
						$('#tl_doiten').html(tl_doiten += 'Tên có tối đa 2 chữ trong các chữ sau: ' + jd.soten[so] + '<br>')
					};
					if (tb == 0 && so != 1 && so != 2) {
						$('#tl_doiten').html(tl_doiten += 'Tên có tối đa 1 trong các chữ sau: ' + jd.soten[so] + '<br>')
					};
				}

				function cotmoc(socotmoc, str_cmoc) {
					for (i7 = 1; i7 < 12; i7++) {
						if (socotmoc == i7) {
							$('#tl_4cotmoc').html(tl_cmoc += str_cmoc + jd.cmoc[i7].split('\n').join('<br />') + '<br><br>')
						}
					}
				}
			});

			function diensoNS(soNS) {
				if (soNS == 1) {
					tbs_1 += soNS
				} else if (soNS == 2) {
					tbs_2 += soNS;
				} else if (soNS == 3) {
					tbs_3 += soNS;
				} else if (soNS == 4) {
					tbs_4 += soNS;
				} else if (soNS == 5) {
					tbs_5 += soNS;
				} else if (soNS == 6) {
					tbs_6 += soNS;
				} else if (soNS == 7) {
					tbs_7 += soNS;
				} else if (soNS == 8) {
					tbs_8 += soNS;
				} else if (soNS == 9) {
					tbs_9 += soNS;
				} else {
					soNS = 0;
				}
			}

			function dienso(array) {
				for (var i3 = 0; i3 < array.length; i3 += 1) {
					if (array[i3] == 1) {
						tbten_1 += array[i3];
					} else if (array[i3] == 2) {
						tbten_2 += array[i3];
					} else if (array[i3] == 3) {
						tbten_3 += array[i3];
					} else if (array[i3] == 4) {
						tbten_4 += array[i3];
					} else if (array[i3] == 5) {
						tbten_5 += array[i3];
					} else if (array[i3] == 6) {
						tbten_6 += array[i3];
					} else if (array[i3] == 7) {
						tbten_7 += array[i3];
					} else if (array[i3] == 8) {
						tbten_8 += array[i3];
					} else if (array[i3] == 9) {
						tbten_9 += array[i3];
					}
				}
			}

			function Calculate(a) {
				if (parseInt(a) <= 11 && parseInt(a) > 0) {
					var x = a;
				} else if (parseInt(a) > 11) {
					while (parseInt(a) > 11) {
						var output = [];
						a_string = a.toString();
						for (var i = 0, len = a_string.length; i < len; i += 1) {
							output.push(+a_string.charAt(i));
						}
						for (var i = 0, sum = 0; i < output.length; sum += output[i++]);
						a = Number(sum);

					}
					x = a;

				} else {
					x = 'Vui lòng nhập đầy đủ ngày sinh hoặc tên';
				}
				return x
			}

			function Calculate22(a) {
				if (parseInt(a) <= 11 && parseInt(a) > 0) {
					var x = a;
				} else if (parseInt(a) == 22) {
					x = 22;
				} else if (parseInt(a) > 11) {
					while (parseInt(a) > 11) {
						var output = [];
						a_string = a.toString();
						for (var i = 0, len = a_string.length; i < len; i += 1) {
							output.push(+a_string.charAt(i));
						}
						for (var i = 0, sum = 0; i < output.length; sum += output[i++]);
						a = Number(sum);

					}
					x = a;

				} else {
					x = 'Vui lòng nhập đầy đủ ngày sinh';
				}
				return x
			}

			function PY(a) {
				if (parseInt(a) <= 9 && parseInt(a) > 0) {
					var x = a;
				} else if (parseInt(a) > 9) {
					while (parseInt(a) > 9) {
						var output = [];
						a_string = a.toString();
						for (var i = 0, len = a_string.length; i < len; i += 1) {
							output.push(+a_string.charAt(i));
						}
						for (var i = 0, sum = 0; i < output.length; sum += output[i++]);
						a = Number(sum);

					}
					x = a;

				} else {
					x = 'Vui lòng nhập đầy đủ ngày sinh';
				}
				return x
			}

			function drawCircle9(arrck, arr9) {
				for (var i5 = 0; i5 < arrck.length; i5 += 1) {
					if (arrck[i5] == 1 || arrck[i5] == 9) {
						arr9.push(+9)
					} else if (arrck[i5] == 2) {
						arr9.push(+5)
					} else if (arrck[i5] == 3 || arrck[i5] == 8) {
						arr9.push(+3)
					} else if (arrck[i5] == 4) {
						arr9.push(+0)
					} else if (arrck[i5] == 5) {
						arr9.push(+2)
					} else if (arrck[i5] == 6) {
						arr9.push(+4)
					} else if (arrck[i5] == 7) {
						arr9.push(+1)
					}
				}
			}

			function makeArrayCK(soCK, arrCK) {
				for (i4 = curyear; i4 < curyear + tuoicmoc4 + 6; i4 += 1) {
					if (soCK > 0 && soCK <= 9) {
						arrCK.push(+soCK);
						soCK += 1;
					} else {
						soCK = 1;
						arrCK.push(+soCK);
						soCK += 1;
					}
				}
			}
		});
		// Chỉnh khi in biểu đồ
		function beforePrint() {
			for (const id in Chart.instances) {
				Chart.instances[id].resize()
			}
		}

		if (window.matchMedia) {
			let mediaQueryList = window.matchMedia('print')
			mediaQueryList.addListener((mql) => {
				if (mql.matches) {
					beforePrint()
				}
			})
		}

		window.onbeforeprint = beforePrint
	});
})(jQuery);