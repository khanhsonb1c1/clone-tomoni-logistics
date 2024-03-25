<template>
  <section id="contact" class="contact-us gray-light-bg ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-12 pb-3 message-box d-none">
          <div class="alert alert-danger"></div>
        </div>
        <div class="col-md-5">
          <div class="section-heading">
            <h2 style="font-size: 2em">Liên hệ</h2>
            <p>Nếu có thắc mắc về bất cứ vấn đề gì, hãy liên hệ với chung tôi qua các kênh dưới đây.</p>
          </div>
          <div class="footer-address">
            <h6><strong>Văn phòng</strong></h6>
            <p>15 Bùi Kỷ, Cẩm Lệ, Đà Nẵng.</p>
            <ul>
              <li><span>Số điện thoại: 1900 2149</span></li>
              <li>
                <span>Email : <a href="mailto:info@tomonivn.com">info@tomonivn.com</a></span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-7">
          <form ref="form" @submit.prevent="sendEmail" class="contact-us-form">
            <h5>Hỗ trợ</h5>
            <div class="row">
              <div class="col-sm-6 col-12">
                <div class="form-group">
                  <input type="text" class="form-control" name="full_name" id="full_name" placeholder="Tên" />
                </div>
              </div>
              <div class="col-sm-6 col-12">
                <div class="form-group">
                  <input type="email" class="form-control" name="user_email" id="user_email" placeholder="Email" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 col-12">
                <div class="form-group">
                  <input
                    type="text"
                    name="phone_number"
                    value=""
                    class="form-control"
                    id="phone_number"
                    placeholder="Số điện thoại"
                  />
                </div>
              </div>
              <div class="col-sm-6 col-12">
                <div class="form-group">
                  <input type="text" name="title" value="" class="form-control" id="title" placeholder="Tiêu đề" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <textarea
                    name="content"
                    id="content"
                    class="form-control"
                    rows="7"
                    cols="25"
                    placeholder="Nội dung"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 mt-3">
                <button type="submit" value="Send" class="btn solid-btn" id="btnContactUs">Gửi hỗ trợ</button>
              </div>
            </div>
          </form>
          <p class="form-message"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import emailjs from "@emailjs/browser";

export default defineComponent({
  name: "contact-component",
  methods: {
    sendEmail() {
      // const content: any = this.$refs.form;
      // emailjs
      //   .sendForm("service_aaq3jil", "template_txxlchd", content, {
      //     publicKey: "-2mdSIlMwpASBzMcb",
      //   })
      //   .then(
      //     () => {
      //       console.log("SUCCESS!");
      //     },
      //     (error) => {
      //       console.log("FAILED...", error);
      //     }
      //   );
    },
  },
});
</script>

<style></style>
