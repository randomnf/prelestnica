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
