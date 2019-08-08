var chai = require('chai');
var expect = chai.expect;
const Zoo = require('../zoo');
const Animal = Zoo.Animal;
const Cow = Zoo.Cow;
const Bird = Zoo.Bird;
const parser = require('../url-parser');

describe('Zoo Test', function(){
  describe('Test Speech', function() {
    it('Basic test', function(done){
      let c = new Cow();
      expect(c.speak('Im a cow')).to.equal('Im mow a mow cow mow');
      done();
    });

    it('Chicken Test', function (done){
      class Chicken extends Animal {
        sound = 'cluck-cluck';
      }

      const chick= new Chicken();
      expect(chick.speak('Hello David')).to.equal('Hello cluck-cluck David cluck-cluck');
      done();
    });

    it('Empty String test', function(done){
      let c = new Cow();
      expect(c.speak('')).to.equal('');
      done();
    });

    it('String ending with a dot', function (done){
      let c = new Cow();
      expect(c.speak('Im a great cow.')).to.equal('Im mow a mow great mow cow mow.');
      done();
    });

    it('Explamation sign', function (done){
      let c = new Cow();
      expect(c.speak('This is a pretty w#$ADSa cow!')).to.equal('This mow is mow a mow pretty mow w#$ADSa mow cow mow!');
      done();
    });

    it('Multiple signs', function (done){
      let b = new Bird();
      expect(b.speak('Are you serious, dog??!')).to.equal('Are chirp you chirp serious chirp, dog chirp??!');
      done();
    });

    it('Special chars', function (done){
      let c = new Cow();
      expect(c.speak('This w#$ADSa a cow')).to.equal('This mow w#$ADSa mow a mow cow mow');
      done();
    });

    it('Multiple sentences', function (done){
      let c = new Cow();
      expect(c.speak('Now this is crazy! This is it. Completely works'))
            .to.equal('Now mow this mow is mow crazy mow! This mow is mow it mow. Completely mow works mow');
      done();
    });

  })
})

describe('Url Parser Test', function(){
  it('Basic test', function(done){
    let res=parser.parse("/:version/api/:collection/:id","/6/api/listings/3?sort=desc&limit=10");

    expect(res).to.have.property('version', '6');
    expect(res).to.have.property('collection', 'listings');
    expect(res).to.have.property('id', '3');
    expect(res).to.have.property('sort', 'desc');
    expect(res).to.have.property('limit', '10');
    
    done();
  });

  it('No parts, only params',function(done){
    let res=parser.parse("/version/api/collection/id","/version/api/collection/id?sort=asc&limit=20");
    expect(res).to.have.all.keys('limit','sort');
    expect(res).to.have.property('sort', 'asc');
    expect(res).to.have.property('limit', '20');
    done();
  });

  it('No params, only parts',function(done){
    let res=parser.parse("/this/:is/:a/part/","/this/weird/custom/part");
    expect(res).to.have.all.keys('is','a');
    expect(res).to.have.property('is', 'weird');
    expect(res).to.have.property('a', 'custom');
    done();
  });

  it('empty format, empty string',function(done){
    let res=parser.parse("","");
    expect(res).to.be.empty;
    done();
  });

  
  it('empty format, has params',function(done){
    let res=parser.parse("","?firstName=Martin&lastName=Flory");
    expect(res).to.have.all.keys('firstName','lastName');
    expect(res).to.have.property('firstName', 'Martin');
    expect(res).to.have.property('lastName', 'Flory');
    done();
  });
})
