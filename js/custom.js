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
            $('#fname').html('Chỉ số tâm hồn của tên: ' + numbTen + '. Chỉ số thể hiện của tên: ' + phuamTen + '. Con số tổng của tên: ' + Calculate(numbTen + phuamTen));
            $('.hide').css({
                "display": "initial"
            });
            // TABLE NAME + BIRDTHDAY
            // 4 COT MOC CUOC DOI - CHART
            // BIỂU ĐỒ CHU KỲ 9 NĂM
            // CHU KỲ CÁC NĂM THAY ĐỔI
            // LUẬN GIẢI CHỈ SỐ CƠ BẢN
            $.getJSON('data/lg_scd.json', function (jd) {
                $('#tl_sochudao').html(jd[sochudao].split('\n').join('<br />'));
            });

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
        });
        $('#reset').on('click', function () {
            $('.hide').css({
                "display": "none"
            });
        });
    });
})(jQuery);