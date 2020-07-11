import React from 'react'

class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
        this.input = React.createRef();
    }

    handleSubmit (event) {
        alert ('Selamat Datang ' + this.input.current.value + ' selamat bersenang senang, OK?');
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        <input type="text" ref={this.input} placeholder="Masukkan Nama Anda.." />
                    </label>
                    <input type="submit" value="Kirim" />
                </form>
            </div>
           

        );
    }

}

export default NameForm;