// Simple interactive touches: hat tip + random sparkle ping on press.
(function(){
  const svg = document.querySelector('.prof-logo');
  const hat = svg?.querySelector('.cap');
  const tassel = svg?.querySelector('.tassel');
  const btn = document.querySelector('.hat-tip');

  // Tip the hat animation
  function tipHat(){
    if(!hat) return;
    hat.animate(
      [
        { transform: 'rotate(0deg) translateY(0)' },
        { transform: 'rotate(-18deg) translateY(-6px)' },
        { transform: 'rotate(0deg) translateY(0)' }
      ],
      { duration: 700, easing: 'cubic-bezier(.2,.8,.2,1)' }
    );

    // little tassel flick
    tassel?.animate(
      [
        { transform: 'rotate(0deg)', transformOrigin: '205px 80px' },
        { transform: 'rotate(18deg)', transformOrigin: '205px 80px' },
        { transform: 'rotate(-10deg)', transformOrigin: '205px 80px' },
        { transform: 'rotate(0deg)', transformOrigin: '205px 80px' }
      ],
      { duration: 600, easing: 'ease-out' }
    );
    ping();
  }

  btn?.addEventListener('click', tipHat);
  svg?.addEventListener('click', tipHat);

  // A tiny ping circle ripple for delight
  function ping(){
    const ping = document.createElement('div');
    ping.className = 'ping';
    const card = document.querySelector('.logo-card');
    card?.appendChild(ping);
    // random near center
    const rX = 45 + Math.random()*10;
    const rY = 35 + Math.random()*10;
    ping.style.left = rX + '%';
    ping.style.top  = rY + '%';

    ping.animate(
      [
        { opacity: .35, transform: 'scale(0.2)' },
        { opacity: 0,  transform: 'scale(2.4)' }
      ],
      { duration: 600, easing: 'ease-out' }
    );
    setTimeout(()=> ping.remove(), 620);
  }
})();
