(function($){

  function Calculate(fid, rid, coe, fnames) {
    this.total = 0;
    this.flag = $('#' + fid); //the flag for different coefficients
    this.result = $('#' + rid); //result id
    this.coe = coe; //array for coefficients

    this.fields = []; //arrary for fields
    for(var i = 0; i < fnames.length; i++) {
      this['field' + i] = $('#' + fnames[i]); //fields id
      this.fields.push(this['field' + i]);
    }
  }

  Calculate.prototype = {

    addToSum: function() {
      var _this = this;
      $(this.fields).each(function(){
        _this.total += parseInt($(this).val());
      });
    },

    mulcoe: function() {
      if(this.flag.is(':checked')) {
        this.total *= parseFloat(this.coe[0]);
      }
      else {
        this.total *= parseFloat(this.coe[1]);
      }
    },

    showResult: function() {
      this.result.val(this.total);
      this.total = 0; //set the result back
    },

    updateResult: function() {
      this.addToSum();
      this.mulcoe();
      this.showResult();
    }

  };

  //execute
  var cal = new Calculate('check1', 'total', [1, 1.5], ['field1', 'field2']);
  $('#check1, #check2, #field1, #field2').bind('change',function(){
     cal.updateResult();
  });

})(jQuery);

})(jQuery);
