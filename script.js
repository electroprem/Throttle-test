throttleSlider.addEventListener('input', function() {
    console.log('Slider value changed');
    const throttleValue = parseFloat(this.value);
    const soundVolume = throttleValue / 100;
    carSound.volume = soundVolume;
    
    // Update speed value
    speedValue.textContent = throttleValue;
});
