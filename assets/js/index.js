'use strict';

(($) => {
  new Vue({
    el: '#juno_okyo',
    data: {
      saved: false,
      focus: false,
      loading: false,
      message: ''
    },
    methods: {
      onSubmit() {
        this.saved = false;
        this.loading = true;

        let data = new FormData();
        data.append('entry.1111560776', this.message);

        fetch('https://docs.google.com/forms/d/e/1FAIpQLSewa4GxtAEuCm35rBQpo7LC8XY-8bq59lwyWrYpA6vLOXem1g/formResponse?embedded=true', {
          method: 'post',
          body: data
        }).finally(() => {
          this.saved = true;
          this.message = '';
          $('#message').focus();

          this.loading = false;
        });
      }
    },
    mounted() {
      this.focus = true;
    }
  });
})(jQuery);