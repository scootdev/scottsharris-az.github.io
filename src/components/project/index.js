import React from 'react';

const project = props => {
    return (
        <div class="col">
            <div class="project">
                <div class="content">
                    <div class="row">
                        <div class="col">
                            <div class="text-center"><h3>{props.title}</h3></div>
                        </div>
                    </div>
                </div>
                <img class="center-block" src={props.img}></img>
                <div class="links">
                    <div class="row">
                        <div class="col">
                            <div class="text-center"><a class="text-dark" target="_blank" href={props.deployed}>Deployed</a>/<a class="text-dark" target="_blank" href={props.git}>Github</a> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default project