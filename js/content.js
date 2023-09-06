// khởi tạo biến toàn cục
// ================================================================================================================================================
let START_VALUE = 0;
let MS = 700; // 0.7 seconds
let ID_CDHA_SIEUAM = '86145346';
let ID_CDHA_DIENTIM = '86145354';
let ID_CDHA_NOISOI_TMH = '86145355';
let ID_CDHA_NOISOI_TH = '86145369';
let ID_CDHA_XQUANG = '86145339';
let ID_CDHA_CT = '86145368';
let ID_TTPT_RHM = ['86145349', 'RHM'];
let ID_TTPT_TMH = ['86145348', 'TMH'];
let ID_TTPT_TT = ['86145341', 'TT'];
let ID_BTN_CLS = 'bt_cls';
let CURRENT_TAB_NAME = 'tiepnhanbenhnhan';
let FLAG = 0;
if (window.location.href.indexOf("khambenhngoaitru") !== -1) {
    CURRENT_TAB_NAME = 'khambenhngoaitru';
    ID_BTN_CLS = 'cls';
}
$(document).ready(function () {
    // onInit
    // ================================================================================================================================================
    initializeButtons(CURRENT_TAB_NAME);
    let buttonCloseDialog = $("[aria-describedby='cls_dialog']").find(".ui-dialog-titlebar-close");
    let defaultSelect, defaultValue, defaultSelect2, defaultValue2 = '';
    let classNameButton_CDHA, classNameButton_TTPT, classNameButton_XN;
    setInterval(function () { buttonCloseDialog.click() },100)
    setInterval(function () {
        classNameButton_CDHA = $("#luu_cdha").attr("class");
        classNameButton_TTPT = $("#luu_ttpt").attr("class");
        classNameButton_XN = $("#luu_xn").attr("class");
        toggleButtons(classNameButton_CDHA, classNameButton_TTPT, classNameButton_XN);
        // trang khám bệnh
        if (CURRENT_TAB_NAME == 'khambenhngoaitru') {
            classNameButton_CLS = $("#cls").attr("class");
            toggleButtons_byButtonCLS(classNameButton_CLS);
        }
    }, MS);
    $("#" + ID_BTN_CLS).hide();
    // MutationObserver
    // ================================================================================================================================================
    const mod_sieuam_btn = document.getElementById("luu_cdha");
    const observer = new MutationObserver(function (mutationsList) {
        for (const mutation of mutationsList) {
            if (mutation.target === mod_sieuam_btn && FLAG == 1) {
                $("#luu_cdha").click();
            }
        }
    });
    observer.observe(mod_sieuam_btn, { attributes: true, childList: true, subtree: true });

    $(document).on("click", "#luu_cdha", function () {
        FLAG = 0;
    })
    $(document).on("click", "#" + ID_BTN_CLS, function () {
        buttonCloseDialog.click();
    })
    // xét nghiệm
    // ================================================================================================================================================
    $(document).on("click", "#mod_xn_btn", function () {
        defaultSelect = undefined;
        defaultValue = undefined;
        defaultSelect2 = undefined;
        defaultValue2 = undefined;
        clickTheButtons(ID_BTN_CLS, 'xetnghiem_bt');
    });
    // chẩn đoán hình ảnh
    // ================================================================================================================================================
    $(document).on("click", "#mod_sieuam_btn", function () {     
        defaultSelect = 'phongcdha';
        defaultValue = ID_CDHA_SIEUAM;
        defaultSelect2 = undefined;
        defaultValue2 = undefined;
        clickTheButtons(ID_BTN_CLS, 'cdha_bt');
    })
    $(document).on("click", "#mod_ct_btn", function () {
        defaultSelect = 'phongcdha';
        defaultValue = ID_CDHA_CT;
        defaultSelect2 = undefined;
        defaultValue2 = undefined;
        clickTheButtons(ID_BTN_CLS, 'cdha_bt');
    })
    $(document).on("click", "#mod_xq_btn", function () {
        defaultSelect = 'phongcdha';
        defaultValue = ID_CDHA_XQUANG;
        defaultSelect2 = undefined;
        defaultValue2 = undefined;
        clickTheButtons(ID_BTN_CLS, 'cdha_bt');
    })
    $(document).on("click", "#mod_dientim_btn", function () {
        defaultSelect = 'phongcdha';
        defaultValue = ID_CDHA_DIENTIM;
        defaultSelect2 = undefined;
        defaultValue2 = undefined;
        clickTheButtons(ID_BTN_CLS, 'cdha_bt');
    })
    $(document).on("click", "#mod_noisoi_th_btn", function () {
        defaultSelect = 'phongcdha';
        defaultValue = ID_CDHA_NOISOI_TH;
        defaultSelect2 = undefined;
        defaultValue2 = undefined;
        clickTheButtons(ID_BTN_CLS, 'cdha_bt');
    })
    $(document).on("click", "#mod_noisoi_tmh_btn", function () {
        defaultSelect = 'phongcdha';
        defaultValue = ID_CDHA_NOISOI_TMH;
        defaultSelect2 = undefined;
        defaultValue2 = undefined;
        clickTheButtons(ID_BTN_CLS, 'cdha_bt');
    })
    // thủ thuật - phẫu thuật
    // ================================================================================================================================================
    $(document).on("click", "#mod_nha_btn", function () {
        defaultSelect = 'phongttpt';
        defaultValue = ID_TTPT_RHM[0];
        defaultSelect2 = 'loaittpt';
        defaultValue2 = ID_TTPT_RHM[1];
        clickTheButtons(ID_BTN_CLS, 'ttpt_bt');
    })
    $(document).on("click", "#mod_tmh_btn", function () {
        defaultSelect = 'phongttpt';
        defaultValue = ID_TTPT_TMH[0];
        defaultSelect2 = 'loaittpt';
        defaultValue2 = ID_TTPT_TMH[1];
        clickTheButtons(ID_BTN_CLS, 'ttpt_bt');
    })
    $(document).on("click", "#mod_tt_btn", function () {
        defaultSelect = 'phongttpt';
        defaultValue = ID_TTPT_TT[0];
        defaultSelect2 = 'loaittpt';
        defaultValue2 = ID_TTPT_TT[1];
        clickTheButtons(ID_BTN_CLS, 'ttpt_bt');
    })
    // dịch vụ
    $(document).on("click", "#mod_dv_btn", function () {
        defaultSelect = undefined;
        defaultValue = undefined;
        defaultSelect2 = undefined;
        defaultValue2 = undefined;
        clickTheButtons(ID_BTN_CLS, 'goidichvu_bt');
    })
    // lưu, in và đóng
    // ================================================================================================================================================
    $(document).on("click", "#mod_xn_save_close", function () {
        $("#luu_xn").click();
        let checkClass = setInterval(function () {
            if (classNameButton_XN == 'button_disabled') {
                $("#phieu_xn").click();
                $("#dong_xn").click();
                clearInterval(checkClass);
            }
        }, MS);
    })
    $(document).on("click", "#mod_cdha_save_close", function () {
        $("#luu_cdha").click();
        let checkClass = setInterval(function () {
            if (classNameButton_CDHA == 'button_disabled') {
                $("#phieu_cdha").click();
                $("#dong_cdha").click();
                clearInterval(checkClass);
            }
        }, MS);
    })
    $(document).on("click", "#mod_ttpt_save_close", function () {
        $("#luu_ttpt").click();
        let checkClass = setInterval(function () {
            if (classNameButton_TTPT == 'button_disabled') {
                $("#phieu_ttpt").click();
                $("#dong_ttpt").click();
                clearInterval(checkClass);
            }
        }, MS);
    })
    // function
    // ================================================================================================================================================
    
    function initializeButtons(tabName) {
        //trang tiếp nhận bệnh nhân
        if (tabName == 'tiepnhanbenhnhan') {
            let tableButtons = $('#formtiepnhan table');
            let buttonsMod = `<tr align="center">
                        <td width="100%" colspan="5" style="padding-top: 4px">
                            <input type="button" id="mod_xn_btn" value="Xét nghiệm" class="button_shadow mod_btns_cdha" style="width: 90px;">                          
                            <input type="button" id="mod_sieuam_btn" value="Siêu âm" class="button_shadow mod_btns_cdha" style="width: 80px;">
                            <input type="button" id="mod_ct_btn"  value="CT" class="button_shadow mod_btns_cdha" style="width: 50px;">
                            <input type="button" id="mod_xq_btn" value="Xquang" class="button_shadow mod_btns_cdha" style="width: 75px;">
                            <input type="button" id="mod_dientim_btn" value="Điện tim" class="button_shadow mod_btns_cdha" style="width: 85px;">
                            <input type="button" id="mod_noisoi_th_btn" value="NS tiêu hoá" class="button_shadow mod_btns_cdha" style="width: 90px;">
                            <input type="button" id="mod_noisoi_tmh_btn" value="NS TMH" class="button_shadow mod_btns_cdha" style="width: 75PX;">
                            <input type="button" id="mod_nha_btn" value="TT Nha" class="button_shadow mod_btns_cdha" style="width: 70px;">
                            <input type="button" id="mod_tmh_btn" value="TT TMH" class="button_shadow mod_btns_cdha" style="width: 70px;">
                            <input type="button" id="mod_tt_btn" value="Thủ thuật" class="button_shadow mod_btns_cdha" style="width: 80px;">       
                            <input type="button" id="mod_dv_btn" value="Gói dịch vụ" class="button_shadow mod_btns_cdha" style="width: 90px">                     
                        </td>
                    </tr>`;
            $(tableButtons[4]).append(buttonsMod);
        }
        //trang khám bệnh
        else {
            $("#btn_kiemtraCLS").hide();
            let divCanhBao = $("#canhbaobenhnhanconthuoc");
            let buttonsModKhamBenh = `<br><br>        
            <div width="100%"  align="center"> <br><hr>
                <input type="button" id="mod_sieuam_btn" value="Siêu âm" class="button_shadow mod_btns_cdha" style="width: 90px; ">
                <input type="button" id="mod_ct_btn" value="CT" class="button_shadow mod_btns_cdha" style="width: 90px; ">
                <input type="button" id="mod_xq_btn" value="Xquang" class="button_shadow mod_btns_cdha" style="width: 90px; ">
                <input type="button" id="mod_dientim_btn" value="Điện tim" class="button_shadow mod_btns_cdha" style="width: 90px; "> <br>
                <input type="button" id="mod_noisoi_th_btn" value="NS tiêu hoá" class="button_shadow mod_btns_cdha" style="width: 90px; margin-top: 5px">
                <input type="button" id="mod_noisoi_tmh_btn" value="NS TMH" class="button_shadow mod_btns_cdha" style="width: 90px; margin-top: 5px"> <br><hr>
                <input type="button" id="mod_nha_btn" value="TT Nha" class="button_shadow mod_btns_cdha" style="width: 90px; ">
                <input type="button" id="mod_tmh_btn" value="TT TMH" class="button_shadow mod_btns_cdha" style="width: 90px; ">
                <input type="button" id="mod_tt_btn" value="Thủ thuật" class="button_shadow mod_btns_cdha" style="width: 90px; "> <br><hr>
                <input type="button" id="mod_dv_btn" value="Gói dịch vụ" class="button_shadow mod_btns_cdha" style="width: 100px; ">   &nbsp; 
                <input type="button" id="mod_xn_btn" value="Xét nghiệm" class="button_shadow mod_btns_cdha" style="width: 100px; ">                   
            </div>  
            `;
            divCanhBao.after(buttonsModKhamBenh);
        }
        // mod thêm nút lưu và in (+ đóng)
        let btnCloseAndSaveXN = `<br><input name="mod_xn_save_close" type="button" id="mod_xn_save_close" value="Lưu và In" class="button_shadow"  style="width: 120px;">`;
        let btnCloseAndSaveCDHA = `<br><input name="mod_cdha_save_close" type="button" id="mod_cdha_save_close" value="Lưu và In" class="button_shadow"  style="width: 120px;">`;
        let btnCloseAndSaveTTPT = `<br><input name="mod_ttpt_save_close" type="button" id="mod_ttpt_save_close" value="Lưu và In" class="button_shadow"  style="width: 120px;">`;
        $("#kysophieuchidinhxn").after(btnCloseAndSaveXN);
        $("#kysochidinhcdha").after(btnCloseAndSaveCDHA);
        $("#kysochidinhttpt").after(btnCloseAndSaveTTPT);
    }
    // đặt giá trị mặc định cho select
    function setDefaultValue(dom, value) {
        $("#" + dom).val(value);
    }
    // đặt giá trị mắc định n lần
    function setDefaultValueMultipleTimes(times, delay, dom, value) {
        let index = START_VALUE;
        let timesToCall = setInterval(function () {
            index++;
            setDefaultValue(dom, value);
            if (index === times) {
                index = 0;
                clearInterval(timesToCall);
            }
        }, delay)
    }
    // nhấn nút
    function clickTheButtons(idButtonCLS, idButtonTarget) {
        if ($("#idtiepnhan").val() != "") {
            $("#" + idButtonCLS).click();
            $("#" + idButtonTarget).click();
            FLAG = 1;
            if (defaultSelect !== undefined && defaultValue !== undefined) {
                //$("#" + defaultSelect).attr("disabled", "disabled");
                setDefaultValueMultipleTimes(5, MS, defaultSelect, defaultValue);
            }
            if (defaultSelect2 !== undefined && defaultValue2 !== undefined) {
                setDefaultValueMultipleTimes(5, MS, defaultSelect2, defaultValue2);
            }
            buttonCloseDialog.click();
        }
    }
    function toggleButtons_byButtonCLS(classNameButton_CSL) {
        if (classNameButton_CSL.indexOf('button_disabled') !== -1) {
            $("#mod_sieuam_btn,#mod_xq_btn,#mod_ct_btn, #mod_noisoi_tmh_btn, #mod_dientim_btn,#mod_noisoi_th_btn,#mod_nha_btn,#mod_tmh_btn,#mod_tt_btn,#mod_dv_btn,#mod_xn_btn").attr("disabled", "disabled");
            $("#mod_sieuam_btn,#mod_xq_btn,#mod_ct_btn, #mod_noisoi_tmh_btn, #mod_dientim_btn,#mod_noisoi_th_btn,#mod_nha_btn,#mod_tmh_btn,#mod_tt_btn,#mod_dv_btn,#mod_xn_btn").addClass("button_disabled");
            $("#mod_sieuam_btn,#mod_xq_btn,#mod_ct_btn, #mod_noisoi_tmh_btn, #mod_dientim_btn,#mod_noisoi_th_btn,#mod_nha_btn,#mod_tmh_btn,#mod_tt_btn,#mod_dv_btn,#mod_xn_btn").removeClass("button_shadow");
        } else {
            $("#mod_sieuam_btn,#mod_xq_btn,#mod_ct_btn, #mod_noisoi_tmh_btn, #mod_dientim_btn,#mod_noisoi_th_btn,#mod_nha_btn,#mod_tmh_btn,#mod_tt_btn,#mod_dv_btn,#mod_xn_btn").attr("disabled", false);
            $("#mod_sieuam_btn,#mod_xq_btn,#mod_ct_btn, #mod_noisoi_tmh_btn, #mod_dientim_btn,#mod_noisoi_th_btn,#mod_nha_btn,#mod_tmh_btn,#mod_tt_btn,#mod_dv_btn,#mod_xn_btn").removeClass("button_disabled");
            $("#mod_sieuam_btn,#mod_xq_btn,#mod_ct_btn, #mod_noisoi_tmh_btn, #mod_dientim_btn,#mod_noisoi_th_btn,#mod_nha_btn,#mod_tmh_btn,#mod_tt_btn,#mod_dv_btn,#mod_xn_btn").addClass("button_shadow");
        }
    }
    function toggleButtons(classNameButton_CDHA, classNameButton_XN, classNameButton_TTPT) {
        //$("#phongcdha, #phongxn, #phongttpt").attr("disabled", "disabled");
        if (classNameButton_CDHA == "button_disabled") {
            $("#mod_cdha_save_close").attr("disabled", "disabled");
            $("#mod_cdha_save_close").addClass("button_disabled");
            $("#mod_cdha_save_close").removeClass("button_shadow");
        } else {
            $("#mod_cdha_save_close").attr("disabled", false);
            $("#mod_cdha_save_close").removeClass("button_disabled");
            $("#mod_cdha_save_close").addClass("button_shadow");
        }
        if (classNameButton_XN == 'button_disabled') {
            $("#mod_xn_save_close").attr("disabled", "disabled");
            $("#mod_xn_save_close").addClass("button_disabled");
            $("#mod_xn_save_close").removeClass("button_shadow");
        } else {
            $("#mod_xn_save_close").attr("disabled", false);
            $("#mod_xn_save_close").removeClass("button_disabled");
            $("#mod_xn_save_close").addClass("button_shadow");
        }
        if (classNameButton_TTPT == 'button_disabled') {
            $("#mod_xn_save_close").attr("disabled", "disabled");
            $("#mod_xn_save_close").addClass("button_disabled");
            $("#mod_xn_save_close").removeClass("button_shadow");
        } else {
            $("#mod_ttpt_save_close").attr("disabled", false);
            $("#mod_ttpt_save_close").removeClass("button_disabled");
            $("#mod_ttpt_save_close").addClass("button_shadow");
        }
    }
});

//TT Nha, TT RHM, Thủ thuật -> thủ thuật
// let ctrlDown = false,
    //     ctrlKey = 17,
    //     cmdKey = 91,
    //     vKey = 86,
    //     cKey = 67;
    // // || e.keyCode == cmdKey
    // $(document).keydown(function (e) {
    //     if (e.keyCode == ctrlKey) {
    //         ctrlDown = true;
    //         console.log(ctrlDown);
    //     }
    // }).keyup(function (e) {
    //     if (e.keyCode == ctrlKey) {
    //         ctrlDown = false;
    //         console.log(ctrlDown);
    //     }
    // });

    // // Document Ctrl + C/V 
    // $(document).keydown(function (e) {
    //     if (ctrlDown && (e.keyCode == cKey)) return false;
    //     if (ctrlDown && (e.keyCode == vKey)) return false;
    // }); 