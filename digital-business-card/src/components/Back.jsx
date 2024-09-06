import React from "react";

export default function Back(){
    return(
        <div className="back-div">
            <div className="back-div-heading">
                <h2>MD. Shuvo</h2>
                <p>Street Photographer</p>
            </div>
            
            <div className="contact">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAa1JREFUSEvlluFNxDAMhX2bwCTAJMAkwCTAJLAJjEK/U1/lc+0krSrdDyIh7nqJv5f42enJrjROV+LaEeD7Wfz3lk0cAf4yM8F/p88IeDMzPpejBX4ysxcz+5xWvzZieLCmAW2uq8Dvk2LAGuyggt+Ymf7uwjoEPGS7z8DZDhDQgvsDQQTC/fHfxhOLYCYDrkYGZw0w5Ze1fFeqUtFbwVnuorl0tH7nrHuejXfeVAQz+adTFjFITI3/3cfD7YjaDWYh6j/mGARn+KP1EAlD0JLrLeaS2Avl4XRwPiXIYHfM9c8WXgaOpeRjt6AylVIlsDesnqUts3J2Dyowwhk0ENIhk/lnKbgy2KK2Y76hn6vO5fOiQKjHVIeMCpztelWLiQIEI7B5QbCud0koX2JclEQA+7LpXSxNcOy5Hh4bf9ZEdt1OggAnqJqEhxMYp1O3uhDi6ZcXy8iLwEgbbRkuhY+AVZ/ZzkcdvqqIUbDgvh+PQpm3MuUWsEBZjfdE+EvlPHcP2O/+MTFeFJE2nr1gH5zj510LE0Z3l/39CLAXobLT//Jd+2hwL9fL7/8P/AeX1GcfHMSUPwAAAABJRU5ErkJggg==" className="phn-logo"/>
                <p>+01331473387</p>
            </div>

            <div className="address">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAASNJREFUSEvtlo0NgjAQhR+b6CY6iTqJOok6iW6io8gzlJy0pXcHpInxEgIk137t/by2QSVrKnExBbwCwOfhWbwXfAJw7IDn9s1/k3nAGwD3AcUMt4JTUK7hBeBgCbsFnIOGzZvgWjCL6KlIIuHbLgKj7howoZc2jNyxxlRwDZiFpIXKsK/HVlkCe6Aq+Bh4CjTAr121R5vPgZnTvSahCp9kj6fAUpUU86pcIvgQXOpVFSXj9AWX4CWhkbpJMHPK3C5plFUWXHQsEk7BoO3Et3cxFJObGNyfYku3E89qSqi6neg4Rx//BpjFIfMW6iElOLPuOKVEOdH5g/vq9rRTtVD36iOaM6d65mORc1LBqN9ByQIndYe2+H7mKd1AvFJZHFcN/AaCpkUfH8xCgQAAAABJRU5ErkJggg=="className="add-logo"/>
                <p>Sylhet, Bangladesh</p>
                <img src="./src/qr.png" alt="" className="qr"/>
            </div>

            <div className="gmail">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAATxJREFUSEvtltENwjAMRK+bwCYwCTAJMAkwCWwCmwAP4SpYoaZpBB/UP62a9M53ttM2+lE0P+LVSPw1573VM0lrSVxrxknSQdLeQFPiiaRzTbYM1lTShecp8eaplufbygngIrEy1V3EJFIjvKAH7jti1qgHyh/WFMbR9Qt4ITFckM4LyOmXXaZJQ2LULhOVbW0+UM5EoNSCjrYpCYkpAZYs7paTvTUcCXVZj8o0YSO6JhidVlvtyRQwIyd71Htyby3r7GM/0ZuYlwDFOiP3oDlrfXJFxFarnI2s2YxaOXJjOIgYYF/3tNfofrPW9+BgYgB93b31ucavQpxazz31jKIqcUSWro/ELx8JThxGxsaij5XRXhu57JHpD4oIrGS9/Rr6Xx9Uk52dUiXguXeYb9S2cz7+3tayNsT5P6tvJEpbH0Ww25AAAAAASUVORK5CYII=" className="email-logo"/>
                <p>runningframing@gmail.com</p>
            </div>
            
            <div className="insta">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAcBJREFUSEvllk1OxDAMhT03gZMABwEBFwFOws9F+NmyZQ+cBPqN/JBJnTZtFhUi0qgznfg9+9lxvLON1m4jXvsTxAdmxmduPc1t4P+5iK/N7MjMjlvAfM+HP++HJ/bpqhFDdBsiFJieU35EJ9l/YmYjuxrxu5Mi280QcZN87o3SgeM4Aelh6WlGjMG5k+Ht0nXqKXxx1SC/M7OLCJQRK1q8bJE24kH64C8gwv4xizoj/nLDWhqQEkUoOoA/PSK+nw2yUlSsSyclkJHcJTigbCSnmcxU6VWiPcCqYpwC983MXh0PXPB+aqUkJh9IkxFHUgpOaSByyFi8L48QeOCuIpYSgP8CcEI5jDPkNp6CLmJFO6rOILtOQxl1F7FAiQbybNXS1EWcGhfs5BkHS1W6iDeTOhZXJrdkzoqvK2IAJSXfkfM59Gad7ew4qRNOHqepBqKOlTWQ2hnmfdqCa50rvVFChEhL48AZIkeBWl9PW3DWj1squPXGUnpmezWAquBav24lZZ+CaLoWkQ8DnmsGAQixXTwIyFDk/O4ZfcrevVdsatiL9+6SYU+Orhr2yjy2jrbYNc1nc+PtkkJatPf/EX8DIXGOHzTONr8AAAAASUVORK5CYII=" className="insta-logo"/>
                <p>@running_framing</p>
            </div>
        </div>
    )
}