import React from 'react';
import Table, {TableBody, TableCell, TableHead, TableRow, TableFooter} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import {MenuItem} from 'material-ui/Menu';
import Select from 'material-ui/Select';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import IconAdd from 'material-ui-icons/Add';
import Button from 'material-ui/Button';

export class ExpensesIncome extends React.Component {
    constructor (props) {
        super(props);

        let store = JSON.parse(localStorage.getItem('expenses')) || {};

        this.categories = store.categories || [];
        this.data = store.data || [];

        this.state = {
            income: {
                categoryId: 0,
                name: '',
                cost: 0
            },
            newCategory: '',
            categories: [],
            data: [],
            open: false
        };

        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangeNewCategory = this.handleChangeNewCategory.bind(this);
        this.handleDialogOpen = this.handleDialogOpen.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
        this.handleDialogSubmit = this.handleDialogSubmit.bind(this);
        this.handleChangeNewIncome = this.handleChangeNewIncome.bind(this);
        this.handleSubmitNewIncome = this.handleSubmitNewIncome.bind(this);
    }

    componentDidMount () {
        this.setState({
            categories: this.categories || [],
            data: this.data || []
        });
    }

    handleChangeNewCategory (e) {
        this.setState({ newCategory: e.target.value });
    }

    handleDialogOpen (e) {
        this.setState({ open: true });
    };

    handleDialogClose (e) {
        this.setState({ open: false });
    };

    handleDialogSubmit () {
        this.categories.push({
            id: Date.now(),
            name: this.state.newCategory
        });
        this.setState({
            categories: this.categories,
            newCategory: ''
        });
        this.handleDialogClose();
        this._saveLocalStorage();
    }

    handleChangeCategory (e) {
        if (e.target.value === 'new') {
            this.handleDialogOpen();
        } else {
            let incomeData = {...this.state.income};
            incomeData.categoryId = e.target.value;
            this.setState({income: incomeData});
        }
    }

    handleChangeNewIncome (e) {
        let incomeData = {...this.state.income};
        incomeData[e.target.name] = e.target.value;
        this.setState({income: incomeData});
    }

    handleSubmitNewIncome () {
        if (this.state.income.categoryId && this.state.income.name && this.state.income.cost) {
            this.data.push(this.state.income);
            this.setState({
                income: {
                    categoryId: 0,
                    name: '',
                    cost: 0
                },
                data: this.data
            });
            this._saveLocalStorage();
        }
    }

    render () {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Sum</TableCell>
                            <TableCell/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.state.data.map((el, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell>{el.name}</TableCell>
                                        <TableCell>
                                            {
                                                this.categories.find(cat => cat.id === el.categoryId).name
                                            }
                                        </TableCell>
                                        <TableCell>{el.cost}</TableCell>
                                        <TableCell/>
                                    </TableRow>
                                );
                            })
                        }
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell>
                                <TextField name="name" label="Name" onChange={this.handleChangeNewIncome}/>
                            </TableCell>
                            <TableCell>
                                <Select value={this.state.income.categoryId} onChange={this.handleChangeCategory}>
                                    {
                                        this.state.categories.map(cat => <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>)
                                    }
                                    <MenuItem value="new">
                                        <IconAdd/>
                                        new category
                                    </MenuItem>
                                </Select>
                            </TableCell>
                            <TableCell>
                                <span><TextField name="cost" label="Cost" onChange={this.handleChangeNewIncome}/></span>
                            </TableCell>
                            <TableCell><IconAdd onClick={this.handleSubmitNewIncome}/></TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
                <Dialog
                    ignoreBackdropClick
                    ignoreEscapeKeyUp
                    open={this.state.open}
                    onRequestClose={this.handleRequestClose}
                >
                    <DialogTitle>New Category</DialogTitle>
                    <DialogContent>
                        <TextField id="categoryName" label="Category Name" onChange={this.handleChangeNewCategory}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleDialogClose} color="primary">Cancel</Button>
                        <Button onClick={this.handleDialogSubmit} color="primary">Ok</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    _saveLocalStorage () {
        localStorage.setItem('expenses', JSON.stringify({
            categories: this.categories,
            data: this.data
        }));
    }
}
