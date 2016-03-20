var React       = require('react'),
    Router      = require('react-router'),
    
    
    Repos       = require('./Github/Repos'),
    UserProfile = require('./Github/UserProfile'),
    Notes       = require('./Notes/Notes'),
    
    ReactFireMixin = require('reactfire'),
    Firebase    = require('firebase');
    
    
var Profile     = React.createClass({
    mixins: [ReactFireMixin],
    
    getInitialState: function(){
        return {
            notes: [1, 2, 3],
            bio:   {
                'name': 'Earvin Kayonga',
            },
            repos: ['a', 'b', 'c']
        }
    },
    
    handleAddNote: function(newNote){
        this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
    },
    
    componentDidMount: function(){
        this.ref = new Firebase('https://earvin-git.firebaseio.com');
        var childRef = this.ref.child(this.props.params.username);
        this.bindAsArray(childRef, 'notes');
    },
    
    componentWillUnMount: function(){
        this.unbind('notes');
    },
    
    render: function(){
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile 
                        username={this.props.params.username}
                        bio={this.state.bio}
                    />
                </div>
                <div className="col-md-4">
                    <Repos
                        username={this.props.params.username}
                        repos={this.state.repos}
                    />
                </div>
                <div className="col-md-4">
                    <Notes 
                        username={this.props.params.username}
                        notes={this.state.notes}
                        addNote={this.handleAddNote}
                    />
                </div>
            </div>
        )
    }
});

module.exports  = Profile;