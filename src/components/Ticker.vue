<template>
    <div class="ticker-wrap">
      <!--div class="ticker">
        <div class="ticker__item">Letterpress chambray brunch.</div>
        <div class="ticker__item">Vice mlkshk crucifix beard chillwave meditation hoodie asymmetrical Helvetica.</div>
      </div-->
      <ul id="webticker" style="position: relative; overflow: hidden; float: left; font: bold 10px Verdana; list-style-type: none; margin: 0px; padding: 0px; width: 3661.58px; transition-timing-function: linear; transition-duration: 4.17468s; left: -208.734px;">
        <li style="white-space: nowrap; float: left; padding: 0px 7px;">
          <span class="indicative-value">ABYR 12.84 <span class="error--text">-1.14 (0.9%&nbsp;<i class="fa fa-caret-down"></i>)</span></span>
        </li>
        <li style="white-space: nowrap; float: left; padding: 0px 7px;">
          <span class="indicative-value">IDHR 129.84 <span class="success--text">+81.14 (0.19%&nbsp;<i class="fa fa-caret-up"></i>)</span></span>
        </li>
        <li style="white-space: nowrap; float: left; padding: 0px 7px;">
          <span class="indicative-value">KNCGR 2.84 <span class="error--text">-1.14 (30.9%&nbsp;<i class="fa fa-caret-down"></i>)</span></span>
        </li>
        <li style="white-space: nowrap; float: left; padding: 0px 7px;">
          <span class="indicative-value">OIRHD 222.84 <span class="success--text">+61.14 (0.49%&nbsp;<i class="fa fa-caret-up"></i>)</span></span>
        </li>
        <li style="white-space: nowrap; float: left; padding: 0px 7px;">
          <span class="indicative-value">MJGTR 9.84 <span class="error--text">-1.14 (0.29%&nbsp;<i class="fa fa-caret-down"></i>)</span></span>
        </li>
        <li style="white-space: nowrap; float: left; padding: 0px 7px;">
          <span class="indicative-value">PLATE 52.84 <span class="error--text">-1.14 (2.9%&nbsp;<i class="fa fa-caret-down"></i>)</span></span>
        </li>
        <li style="white-space: nowrap; float: left; padding: 0px 7px;">
          <span class="indicative-value">NCHDTR 677.84 <span class="success--text">+91.14 (0.9%&nbsp;<i class="fa fa-caret-up"></i>)</span></span></li><li style="white-space: nowrap; float: left; padding: 0px 7px;"><span class="indicative-value">MNVHYR 8.84 <span class="error--text">-1.14 (4.9%&nbsp;<i class="fa fa-caret-down"></i>)</span></span>
        </li>
        <li style="white-space: nowrap; float: left; padding: 0px 7px;">
          <span class="indicative-value">OKPTKR 112.84 <span class="success--text">+51.14 (0.9%&nbsp;<i class="fa fa-caret-up"></i>)</span></span>
        </li>
        <li style="white-space: nowrap; float: left; padding: 0px 7px;">
          <span class="indicative-value">MVNTCR 12.84 <span class="error">-1.14 (3.9%&nbsp;<i class="fa fa-caret-down"></i>)</span></span>
        </li>
        <li style="white-space: nowrap; float: left; padding: 0px 7px;"><span class="indicative-value">PLAYR 12.84 <span class="success--text">+13.14 (0.9%&nbsp;<i class="fa fa-caret-up"></i>)</span></span>
        </li>
        <li style="white-space: nowrap; float: left; padding: 0px 7px;">
          <span class="indicative-value">MNVTR 162.84 <span class="success--text">+14.14 (2.9%&nbsp;<i class="fa fa-caret-up"></i>)</span></span>
        </li>
        <li style="white-space: nowrap; float: left; padding: 0px 7px;">
          <span class="indicative-value">AWEQ 162.84 <span class="error--text">-1.14 (1.9%&nbsp;<i class="fa fa-caret-down"></i>)</span></span>
        </li>
        <li class="last" style="white-space: nowrap; float: left; padding: 0px 7px;">
          <span class="indicative-value">QWUBDR 12.84 <span class="success--text">+4.14 (0.9%&nbsp;<i class="fa fa-caret-up"></i>)</span></span>
        </li>
        <li style="white-space: nowrap; float: left; padding: 0px 7px;">
          <span class="potential-income">Indicative potential income:</span>
        </li>     
			</ul>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
$duration: 60s;

@keyframes ticker {
  0% {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    transform: translate3d(-100%, 0, 0);
  }
}

.ticker-wrap {
  bottom: 0;
  width: 100%;
  overflow: hidden;
  height: 32px;
  padding-left: 100%;
  box-sizing: content-box;

  ul {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    white-space: nowrap;
    padding-right: 100%;
    box-sizing: content-box;

    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: ticker;
    animation-duration: $duration;

    li {
      display: inline-block;
      padding: 0 2rem;
      color: white;
      height: 32px;
      line-height: 32px;
      font-size: small;
    }
  }
}
</style>
