define(['jquery'], function($) {
	function Table(cfg, selectP, inBox, offbtn) {
		this.Box = cfg;
		this.selectP = selectP;
		this.inBox = inBox;
		this.offbtn = offbtn;
		this.span = $(this.Box).find('span').parent('td');
		this.showBtn();
		this.alert();
		this.checkSelect();


	}

	Table.prototype = {
		showBtn: function() {
			var jobP = $(
				'<p class="' + this.selectP + '">' +
				'请选择' +
				'</p>'
				);
			jobP.appendTo(this.inBox);

		},

		alert: function() {
			var that = this,
			selectBox = $(that.Box);
			$('.' + this.selectP).click(function() {
				if ($(that.inBox).children().length > 2) {

					selectBox .show();

				} else {
					selectBox.appendTo(that.inBox);
					selectBox.show();

				}
				$('.' + that.offbtn).on('click', function() {
					selectBox .hide();

				});

				that.checkBoxAll();

			});

			$(document).mouseup(function(e){
				if(!selectBox .is(e.target) && selectBox.has(e.target).length === 0){
					selectBox .hide();
				}

			});

		},
		checkSelect: function() {
			this.span.each(function() {
				$(this).click(function() {
					var inputs = $(this).next('td').find('input');
					var checkedIpt = $(this).next('td').find('input:checked');
					if (checkedIpt.length > 0) {
						inputs.prop('checked', false);
					}else{
						inputs.prop('checked', true);
					}

				})
			})
		},

		checkBoxAll: function(){
			var checkBoxAll = $('.checkbox-all');
			
			checkBoxAll.each(function(){
				this.parentNode.style.fontSize = 16 + 'px';
				$(this).change(function(){
					var nextInput = $(this).parent().next().find('input');
					var that = this;

					nextInput.prop('checked', that.checked);

				})

			});
			$(".major-child").each(function(){
				var self = this;
				$(this).find("input").change(function(){
					/* var checkSib = $(this).parent().siblings().find("input");*/
					var checkChild = $(self).find("input");
					var checkNum = 0;
					for(var i=0; i< checkChild.length; i++){
						if(checkChild[i].checked){
							checkNum ++;
						}
					}
					if(checkChild.length == checkNum){
						$(self).siblings("label").find("input").prop("checked", true);
					}else if(checkNum == 0){
						$(self).siblings("label").find("input").prop("checked", false);
					}
				});

			});
		}
	}

		return {
			Table: Table
		}
});