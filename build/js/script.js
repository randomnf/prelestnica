/* input value check */

const inputs = document.querySelectorAll(".site-input,.site-textarea");

for(let i=0,inp;inp=inputs[i];i++){
	inp.addEventListener("blur",function(e){
		if(this.value)
			this.classList.add("input-filled");
		else
			this.classList.remove("input-filled");
	});
}

/* popup forms */

const popup_wrap = document.querySelector(".popup_wrap");
let opw,tmp;

tmp = document.querySelector(".header-callback-order-btn");
if(tmp){
	tmp.addEventListener("click",function(e){
		e.preventDefault();
		popup_wrap.classList.add("opened");
		opw = document.querySelector(".callback-order-form_wrap");
		opw.classList.add("opened");
	});
}

tmp = document.querySelector(".order-measure-form_detail_submit-btn");
if(tmp){
	tmp.addEventListener("click",function(e){
		e.preventDefault();
		popup_wrap.classList.add("opened");
		opw = document.querySelector(".order-measure-popup-form_wrap");
		opw.classList.add("opened");
	});
}

const cpb_l = document.querySelectorAll(".close-popup-btn");

for(let i=0,btn;btn=cpb_l[i];i++){
	btn.addEventListener("click",function(e){
		e.preventDefault();
		opw.classList.remove("opened");
		popup_wrap.classList.remove("opened");
	});
}

window.addEventListener("mouseup",function(e){
	if(opw && opw.classList.contains("opened")){
		jopw = $(".popup_window.opened");
		if(!jopw.is(e.target) && jopw.has(e.target).length===0){
			jopw.removeClass("opened");
			popup_wrap.classList.remove("opened");
			popup_wrap.classList.remove("popup-slider_wrap");
		}
	}
});

window.addEventListener("keydown",function(e){
	if(e.keyCode==27 && opw.classList.contains("opened")){
		opw.classList.remove("opened");
		popup_wrap.classList.remove("opened");
		popup_wrap.classList.remove("popup-slider_wrap");
	}
});

/* skukozhing menu */

/*$('ul.main-menu.flex.menu').flexMenu();

const mm = document.querySelector(".main-menu");

function getCoord(elem){
	const box = elem.getBoundingClientRect();

	return{
		top: box.top + pageYOffset,
		left: box.left + pageXOffset,
		bottom: box.bottom + pageYOffset,
		right: box.right + pageXOffset
	};
};

function skukozh(){
	let mml = mm.querySelectorAll(".main-menu > .main-menu_item:not(.skukozhing-item)"),
		sk = mm.querySelector(".skukozhing-item"),
		smw = sk.querySelector(".skukozhing-menu_wrap"),
		sm = smw.querySelector(".skukozhing-menu"),
		sml = sm.querySelectorAll(".main-menu_item"),
		mml_sum=0,
		min_sum=0,
		tmp_sum=0,
		coords = getCoord(document.querySelector("body")),
		maw = coords.right - coords.left - 30,
		menu_skukozhed=sk.classList.contains("menu-skukozhed"),
		skukozhed_items_count=0,
		i,item,first_skukozhed;

	//считаем сумму ширин элементов меню
	for(i=0;item=mml[i];i++){
		mml_sum+=item.scrollWidth;
	}

	//запоминаем минимальную ширину каждого элемента меню
	if(mml_sum>maw){
		for(i=0;item=mml[i];i++){
			if(item.getAttribute("data-min-width")==0)
				item.setAttribute("data-min-width",item.scrollWidth);
		}
	}

	if(menu_skukozhed==true){
		//если меню скукожено, то пересчитываем сумму элементов
		mml_sum=0;
		for(i=0;item=mml[i];i++){
			if(menu_skukozhed==true){
				mml_sum+=parseInt(item.getAttribute("data-min-width"));
			}
		}
		mml_sum+=79;	//79 - минимальная ширина итема "еще ..."
		//считаем кол-во элементов в скукоженом меню
		for(i=0;item=sml[i];i++)
			skukozhed_items_count++;
	}

	//skukozhing
	if(mml_sum>maw){
		i = mml.length - 1;
		if(menu_skukozhed!=true)
			sk.classList.add("menu-skukozhed");
		while(mml_sum>maw && i>=0){
			mml_sum-=mml[i].scrollWidth;
			item = mml[i].cloneNode(true);
			first_skukozhed = sm.querySelector(".main-menu_item:first-child");
			if(first_skukozhed)
				sm.insertBefore(item,first_skukozhed);
			else
				sm.appendChild(item);
			mm.removeChild(mml[i]);
			skukozhed_items_count++;
			i--;
		}
	}
	//raskukozhing
	else{
		first_skukozhed = sm.querySelector(".main-menu_item:first-child");
		if(skukozhed_items_count==1)
			mml_sum+=parseInt(first_skukozhed.getAttribute("data-min-width")) - sk.scrollWidth;
		else
			mml_sum+=parseInt(first_skukozhed.getAttribute("data-min-width"));
		while(skukozhed_items_count && mml_sum<=maw){
			first_skukozhed = sm.querySelector(".main-menu_item:first-child");

			item = first_skukozhed.cloneNode(true);
			mm.insertBefore(item,sk);
			sm.removeChild(first_skukozhed);

			skukozhed_items_count--;
			if(skukozhed_items_count==1){
				mml_sum+=parseInt(first_skukozhed.getAttribute("data-min-width")) - sk.scrollWidth;
				sk.classList.remove("menu-skukozhed");
			}
			else
				mml_sum+=parseInt(first_skukozhed.getAttribute("data-min-width"));
		}
	}
}

window.addEventListener("load",function(){
	skukozh();
});

window.addEventListener("resize",function(){
	skukozh();
});*/

function getCoord(elem){
	const box = elem.getBoundingClientRect();

	return{
		top: box.top + pageYOffset,
		left: box.left + pageXOffset,
		bottom: box.bottom + pageYOffset,
		right: box.right + pageXOffset
	};
};

function aside_to_menu(){
	let coords = getCoord(document.querySelector("body")),
		maw = coords.right - coords.left;
	if(maw<768){
		const menu = document.querySelector(".nav__dropdown"),
			pc = document.querySelector(".page-content");
		let aside = pc.querySelector(".aside-col"),
			temp;
		if(aside){
			temp = document.createElement('li');
			menu.appendChild(temp);
			temp = aside.cloneNode(true);
			menu.querySelector("li:last-child").appendChild(temp);
			pc.removeChild(aside);
		}
	}
	else{
		const menu = document.querySelector(".nav__dropdown"),
			pc = document.querySelector(".page-content");
		let aside = menu.querySelector(".aside-col"),
			temp;
		if(aside){
			temp = aside.cloneNode(true);
			pc.insertBefore(temp,pc.querySelector(".main-content-col"));
			menu.querySelector("li:last-child").removeChild(aside);
		}
	}
}

window.addEventListener("load",function(){
	aside_to_menu();
});

window.addEventListener("resize",function(){
	aside_to_menu();
});

/* catalog slider */

const slider_list = document.querySelectorAll(".stairs-catalog-card_slider-wrap");

function change_slide(i,j){
	let sl = slider_list[i].querySelectorAll(".stairs-catalog-card_slider-img");
	for(let j=0,img;img=sl[j];j++)
		img.classList.remove("active-slide");
	let as = document.querySelector(".stairs-catalog-card_slider-item:nth-child("+j+") .stairs-catalog-card_slider-img");
	as.classList.add("active-slide")
};

for(let i=0,item,ss_list;item=slider_list[i];i++){
	ss_list=item.querySelectorAll(".stairs-catalog-card_mini-slider-img");
	for(let j=0,img;img=ss_list[j];j++){
		if(img){
			img.addEventListener("click",function(){
				change_slide(i,(j+1));
			});
			img.addEventListener("mouseenter",function(){
				change_slide(i,(j+1));
			});
		}
	}
}

/* detail page popup slider */

const il = document.querySelectorAll(".detail-page-slider_img"),
	psi = document.querySelector(".popup-slider_inner");

function init_popup_slider(){
	$('.popup-slider').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false
	});
}

if(il[0]){
	for(let i=0,img;img=il[i];i++){
		img.addEventListener("click",function(e){
			popup_wrap.classList.add("opened");
			popup_wrap.classList.add("popup-slider_wrap");
			opw=psi;
			opw.classList.add("opened");
			init_popup_slider();
			let pfas = document.querySelector(".popup-slider_item.flex-active-slide"),
				asi = pfas.querySelector(".popup-slider_img"),
				clicked_img = parseInt(this.getAttribute("data-slide-num"));
			if(clicked_img!=parseInt(asi.getAttribute("data-slide-num"))){
				pfas.classList.remove("flex-active-slide");
				asi = document.querySelector('.popup-slider_img[data-slide-num="'+clicked_img+'"]');
				asi.parentNode.classList.add("flex-active-slide");
				document.querySelector(".popup-slider ul.slides").style.transform=" translate3d("+(-(clicked_img-1)*424)+"px, 0px, 0px)";
			}
		});
	}
}

/* detail page mobile sliders */

const lnk_prev = document.querySelector(".stage-paint_controls-link.control_prev-link"),
	lnk_next = document.querySelector(".stage-paint_controls-link.control_next-link"),
	spl = document.querySelector(".stage-paint_list"),
	spli = spl.querySelectorAll(".stage-paint_item"),
	slide_w=180;
let spl_count=0,
	spl_slides_num=1;

for(let i=0,item;item=spli[i];i++)
	spl_count++;

if(spl_count>5)
	spl_slides_num = Math.ceil(spl_count/5);

lnk_prev.addEventListener("click",function(e){
	e.preventDefault();
	if(spl_slides_num>1){
		let curslide = parseInt(spl.getAttribute("data-cur-slide"));
		if(curslide>1){
			spl.style.left=(-((curslide-2)*slide_w))+"px";
			spl.setAttribute("data-cur-slide",(curslide-1));
		}
		else{
			spl.style.left=(-(spl_slides_num-1)*slide_w)+"px";
			spl.setAttribute("data-cur-slide",spl_slides_num);
		}
	}
});

lnk_next.addEventListener("click",function(e){
	e.preventDefault();
	if(spl_slides_num>1){
		let curslide = parseInt(spl.getAttribute("data-cur-slide"));
		if(curslide<spl_slides_num){
			spl.style.left=(-(curslide*slide_w))+"px";
			spl.setAttribute("data-cur-slide",(curslide+1));
		}
		else{
			spl.style.left="0px";
			spl.setAttribute("data-cur-slide",1);
		}
	}
});

const lnkt_prev = document.querySelector(".carcass-paint_controls-link.control_prev-link"),
	lnkt_next = document.querySelector(".carcass-paint_controls-link.control_next-link"),
	cpvw = document.querySelector(".carcass-paint-table_content"),
	cp_rows = cpvw.querySelectorAll(".carcass-paint-table_content .carcass-paint-table_row"),
	slide_t_w=240;
let cpt_count=0,
	cpt_slides_num=1;

for(let i=0,item;item=cp_rows[i];i++)
	cpt_count++;

if(cpt_count>5)
	cpt_slides_num = Math.ceil(cpt_count/5);

lnkt_prev.addEventListener("click",function(e){
	e.preventDefault();
	if(cpt_slides_num>1){
		let curslide = parseInt(cpvw.getAttribute("data-cur-slide"));
		if(curslide>1){
			cpvw.style.left=(-((curslide-2)*slide_t_w))+"px";
			cpvw.setAttribute("data-cur-slide",(curslide-1));
		}
		else{
			cpvw.style.left=(-(cpt_slides_num-1)*slide_t_w)+"px";
			cpvw.setAttribute("data-cur-slide",cpt_slides_num);
		}
	}
});

lnkt_next.addEventListener("click",function(e){
	e.preventDefault();
	if(cpt_slides_num>1){
		let curslide = parseInt(cpvw.getAttribute("data-cur-slide"));
		if(curslide<cpt_slides_num){
			cpvw.style.left=(-(curslide*slide_t_w))+"px";
			cpvw.setAttribute("data-cur-slide",(curslide+1));
		}
		else{
			cpvw.style.left="0px";
			cpvw.setAttribute("data-cur-slide",1);
		}
	}
});

/* to top btn */

$(window).scroll(function() {
	if($(this).scrollTop() > 800) {
		$('.to-top-btn').fadeIn();
	} else {
		$('.to-top-btn').fadeOut();
	}
});
$('.to-top-btn').click(function(e) {
	e.preventDefault();
	$('body,html').animate({scrollTop:0},800);
});
