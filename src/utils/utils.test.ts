import { getImage, getGanres, getRuntime, getMoney } from './utils';

describe('utils', () => {
  it('image path', () => {
    const imagePath = getImage('image', 'path');
    expect(imagePath).toEqual('imagepath');
  });

  it('ganres', () => {
    const ganres = getGanres([
      { id: 1, name: 'Action' },
      { id: 2, name: 'Triller' },
    ]);
    expect(ganres).toEqual('Action, Triller');
  });

  it('time', () => {
    const time = getRuntime(121);
    expect(time).toEqual('2h 01m');
  });

  it('money', () => {
    const money = getMoney(1000000);
    expect(money).toEqual('1 000 000$');
  });
});
