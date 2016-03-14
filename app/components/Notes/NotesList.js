var React       = require('react');

var NotesList   = React.createClass({
    render: function(){
        var notes = this.props.notes.map(function(notes, index){
            return <li className="list-group-item" key={index}>{notes['.value']}</li>
        });
        
        return (
            <ul className="list-group">
                {notes}
            </ul>
        );
    }
});

module.exports = NotesList;

// .value => fireBase